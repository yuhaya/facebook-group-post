/**
 * Facebook 小组发帖。
 * 主路径对齐旧系统 `facebook_group_post_other_language`：结构锚点，不依赖界面语言。
 * 图片：单图 uploadFile，多图 uploadFiles；视频每帖 1 个。
 */
import type { TaskRunConfig } from './config.types';
import {
  type AutomationRunResult,
  automationFailWithContext,
  loadAutomationManifest,
  loadTaskRunConfig,
  nodePath,
  parsePositiveIntConfig,
  XportBrowserClient,
} from 'xport-browser-sdk';

type NodePath = ReturnType<typeof nodePath>;

/** a[role=tab][id=posts] */
const postsTabPath = nodePath().css('a[role="tab"][id="posts"]').one();

/** 发帖入口短 class（旧系统 dicuss） */
const COMPOSER_BOX =
  'div[class="x6s0dn4 x78zum5 x1l90r2v xv54qhq xf7dkkf xz9dl7a"]';
const composerBoxPath = nodePath().css(COMPOSER_BOX);
const composerButtonsPath = nodePath().css(COMPOSER_BOX).then().css('div[role="button"]');

const dialogRoot = 'div[role="dialog"][aria-modal="true"]';

const dialogTextboxPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('form[method="POST"]')
  .then()
  .css('div[role="textbox"]')
  .one();

const dialogFileInputPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('form[method="POST"]')
  .then()
  .css('input[type="file"]')
  .one();

const dialogFileInputReadyPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('form[method="POST"]')
  .then()
  .css('input[class="x1s85apg"]');

/** 照片/视频图标（file input 未出现时点开） */
const dialogPhotoIconPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('img[src*="r/5ak_tKfzmQv.webp"]')
  .one();

const dialogVideoPath = nodePath().css(dialogRoot).then().css('video').one();

/**
 * 发布按钮内层（旧系统同结构）。
 * 注意：勿对点击路径用 `.one()`/`.pick()`——宿主会对 one 做视口过滤，
 * 弹窗底部按钮偶发被滤成 0，表现为「按钮明明亮着却永远点不到」。
 */
const dialogPostInnersPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('div[role="button"] > div[role="none"][class*="xtvsq51"]');

/** 本地上传后的预览图 */
const dialogBlobImagePath = nodePath()
  .css(dialogRoot)
  .then()
  .css('img[src*="blob:"]');

/** 匿名开关：限定在发帖弹窗内，避免点到页内其它 switch */
const anonymousOffPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('input[aria-checked="false"]');
const anonymousOnPath = nodePath()
  .css(dialogRoot)
  .then()
  .css('[role="switch"][aria-checked="true"]');

/** Got it：旧系统结构 + 中英 */
const anonymousGotItPath = nodePath().css(
  'div[class="xkj4a21"] div.xtvsq51',
  'div[aria-label="知道了"]',
  'div[aria-label="Got it"]',
);

function normalizeResources(raw: unknown): string[] {
  if (Array.isArray(raw)) {
    return raw.map((v) => String(v).trim()).filter(Boolean);
  }
  if (typeof raw === 'string' && raw.trim()) {
    return [raw.trim()];
  }
  return [];
}

function takeImages(pool: string[], count: number): string[] {
  if (pool.length === 0 || count < 1) return [];
  const items: string[] = [];
  for (let i = 0; i < count; i++) {
    items.push(pool[i % pool.length]!);
  }
  return items;
}

async function failStep(
  client: XportBrowserClient,
  step: string,
  reason: string,
  code: string,
  labels?: Record<string, string>,
): Promise<AutomationRunResult> {
  const [, , captured] = await client.captureIncident({
    step,
    reason,
    code,
    labels,
  });
  return automationFailWithContext(reason, {
    code,
    step,
    incidentId: captured?.incidentId,
    labels,
  });
}

async function sleep(ms: number): Promise<void> {
  await Bun.sleep(ms);
}

async function waitForCount(
  client: XportBrowserClient,
  path: NodePath,
  pred: (n: number) => boolean,
  timeoutMs: number,
  intervalMs = 500,
): Promise<number> {
  const deadline = Date.now() + timeoutMs;
  let last = 0;
  while (Date.now() < deadline) {
    const [ok, , count] = await client.getNodeCount(0, path);
    last = ok && typeof count === 'number' ? count : 0;
    if (pred(last)) return last;
    await sleep(intervalMs);
  }
  return last;
}

function composerButtonPath(index: number): NodePath {
  return nodePath().css(COMPOSER_BOX).then().css('div[role="button"]').pick(index);
}

async function clickOpenComposer(client: XportBrowserClient): Promise<boolean> {
  const [ok, , btnCount] = await client.getNodeCount(0, composerButtonsPath);
  const n = ok ? (btnCount ?? 0) : 0;
  if (n < 1) return false;
  // 旧系统：≥2 点 index 1，否则点唯一按钮
  const path = composerButtonPath(n >= 2 ? 1 : 0);
  const [clickOk] = await client.clickNode(0, path);
  return Boolean(clickOk);
}

async function clickSubmitOnce(client: XportBrowserClient): Promise<boolean> {
  const [ok, , count] = await client.getNodeCount(0, dialogPostInnersPath);
  if (!ok || (count ?? 0) < 1) return false;
  // many(0,1)=只取第一个；避免 .one()/.pick() 视口过滤把底部「发布」滤成 0
  const path = nodePath()
    .css(dialogRoot)
    .then()
    .css('div[role="button"] > div[role="none"][class*="xtvsq51"]')
    .many(0, 1);
  await client.scrollNodeIntoView(0, path);
  const [clickOk, clickMsg] = await client.clickNode(0, path);
  if (!clickOk) {
    client.taskLog(`click submit: ${clickMsg}`);
    return false;
  }
  return true;
}

async function enableAnonymousIfWanted(
  client: XportBrowserClient,
  wantAnonymous: boolean,
): Promise<void> {
  if (!wantAnonymous) return;

  const [offOk, , offCount] = await client.getNodeCount(0, anonymousOffPath);
  if (!offOk || (offCount ?? 0) < 1) {
    client.taskLog('anonymous switch not found — skip');
    return;
  }

  const [clickOk, clickMsg] = await client.clickNode(0, anonymousOffPath);
  if (!clickOk) {
    client.taskLog(`click anonymous failed: ${clickMsg}`);
    return;
  }
  await sleep(600);

  const gotIt = await waitForCount(client, anonymousGotItPath, (n) => n >= 1, 5_000);
  if (gotIt >= 1) {
    await client.clickNode(0, anonymousGotItPath);
    await sleep(800);
  }

  const on = await waitForCount(client, anonymousOnPath, (n) => n >= 1, 8_000);
  client.taskLog(on >= 1 ? 'anonymous enabled' : 'anonymous state unclear');
}

async function runAutomation(
  client: XportBrowserClient,
  taskConfig: TaskRunConfig,
): Promise<AutomationRunResult> {
  const host = String(taskConfig.host ?? '').trim();
  const mediaType = taskConfig.media_type === 'video' ? 'video' : 'image';
  const content = String(taskConfig.content ?? '').trim();
  const wantAnonymous = Number(taskConfig.post_anonymously) === 1;
  const imagePool = normalizeResources(taskConfig.images);
  const imageCount = parsePositiveIntConfig(taskConfig.image_count ?? 1, 1);
  const images = mediaType === 'image' ? takeImages(imagePool, imageCount) : [];
  const video =
    typeof taskConfig.video === 'string' && taskConfig.video.trim()
      ? taskConfig.video.trim()
      : '';
  const mediaCount = mediaType === 'video' ? (video ? 1 : 0) : images.length;
  const labels = {
    host,
    mediaType,
    contentPreview: content.slice(0, 80),
    mediaCount: String(mediaCount),
    postAnonymously: wantAnonymous ? '1' : '0',
  };

  client.taskLog(
    `host=${host || '(empty)'} mediaType=${mediaType} anonymous=${wantAnonymous ? 1 : 0} contentLen=${content.length} mediaCount=${mediaCount}`,
  );

  if (!host) {
    return automationFailWithContext('host is required in taskRunConfig', {
      code: 'UNKNOWN',
      step: 'validate_host',
    });
  }
  // 与旧系统一致：文案与媒体至少一个；允许纯图/纯视频无文案
  if (!content && mediaCount < 1) {
    return automationFailWithContext('content or media is required in taskRunConfig', {
      code: 'UNKNOWN',
      step: 'validate_content',
    });
  }
  if (mediaType === 'image') {
    if (imagePool.length === 0) {
      return automationFailWithContext('images is required when media_type=image', {
        code: 'UNKNOWN',
        step: 'validate_images',
      });
    }
    if (imageCount < 1) {
      return automationFailWithContext('image_count must be at least 1', {
        code: 'UNKNOWN',
        step: 'validate_image_count',
      });
    }
  }
  if (mediaType === 'video' && !video) {
    return automationFailWithContext('video is required when media_type=video (one per post)', {
      code: 'UNKNOWN',
      step: 'validate_video',
    });
  }

  try {
    const [goOk, goMsg] = await client.pageGoTo(0, { url: host, timeoutMs: 60_000 });
    if (!goOk) {
      return await failStep(client, 'open_host', goMsg || 'pageGoTo failed', 'NAV_FAILED', labels);
    }

    // 导航后直接等发帖入口出现即可；勿 waitForNetworkIdle（FB 长连接易假死）
    await sleep(800);

    const [urlOk, , pageUrl] = await client.getPageUrl();
    if (urlOk && /\/login/i.test(pageUrl ?? '')) {
      return await failStep(
        client,
        'check_login',
        'Browser is not logged in to Facebook. Please log in on this fingerprint profile first.',
        'NOT_LOGGED_IN',
        labels,
      );
    }

    // 1) 切到 Posts 页签（语言无关）
    const [tabOk, , tabCount] = await client.getNodeCount(0, postsTabPath);
    if (tabOk && (tabCount ?? 0) >= 1) {
      await client.clickNode(0, postsTabPath);
      await sleep(1000);
    }

    // 2) 等发帖入口 → 点击
    const boxReady = await waitForCount(client, composerBoxPath, (n) => n >= 1, 20_000);
    if (boxReady < 1) {
      return await failStep(
        client,
        'find_create_post',
        'Group compose entry not found',
        'ELEMENT_NOT_FOUND',
        labels,
      );
    }
    if (!(await clickOpenComposer(client))) {
      return await failStep(
        client,
        'open_composer',
        'failed to click group compose entry',
        'ELEMENT_NOT_FOUND',
        labels,
      );
    }

    // 3) 等弹窗 textbox
    const textboxCount = await waitForCount(client, dialogTextboxPath, (n) => n >= 1, 15_000);
    if (textboxCount < 1) {
      return await failStep(
        client,
        'wait_composer_dialog',
        'Post composer dialog did not open',
        'ELEMENT_NOT_FOUND',
        labels,
      );
    }

    await enableAnonymousIfWanted(client, wantAnonymous);

    // 开匿名后 DOM 可能重建，重新等 textbox
    const textboxAfterAnon = await waitForCount(client, dialogTextboxPath, (n) => n >= 1, 10_000);
    if (textboxAfterAnon < 1) {
      return await failStep(
        client,
        'wait_composer_after_anonymous',
        'Composer textbox missing after anonymous toggle',
        'ELEMENT_NOT_FOUND',
        labels,
      );
    }

    // 4) 文案（可空：纯图/视频）
    if (content) {
      await client.clickNode(0, dialogTextboxPath);
      await sleep(200);
      const [typeOk, typeMsg] = await client.typeInNode(0, dialogTextboxPath, content);
      if (!typeOk) {
        return await failStep(
          client,
          'fill_content',
          typeMsg || 'failed to type post content',
          'ELEMENT_NOT_FOUND',
          labels,
        );
      }
    } else {
      client.taskLog('content empty — media-only post');
    }

    // 5) 附件：优先已有 file input，否则点照片图标
    let fileCount = await waitForCount(client, dialogFileInputPath, (n) => n >= 1, 5_000);
    if (fileCount < 1) {
      const [readyOk, , readyCount] = await client.getNodeCount(0, dialogFileInputReadyPath);
      if (!readyOk || (readyCount ?? 0) < 1) {
        const [iconOk, , iconCount] = await client.getNodeCount(0, dialogPhotoIconPath);
        if (iconOk && (iconCount ?? 0) >= 1) {
          await client.clickNode(0, dialogPhotoIconPath);
          await sleep(2000);
        }
      }
      fileCount = await waitForCount(client, dialogFileInputPath, (n) => n >= 1, 10_000);
    }
    if (fileCount < 1) {
      return await failStep(
        client,
        'find_file_input',
        'File input not found in post dialog',
        'ELEMENT_NOT_FOUND',
        labels,
      );
    }

    if (mediaType === 'video') {
      const [upOk, upMsg] = await client.uploadFile(0, dialogFileInputPath, video);
      if (!upOk) {
        return await failStep(client, 'upload_video', upMsg || 'uploadFile failed', 'UNKNOWN', labels);
      }
      const videoReady = await waitForCount(client, dialogVideoPath, (n) => n >= 1, 60_000, 800);
      if (videoReady < 1) {
        return await failStep(
          client,
          'wait_video_preview',
          'Video preview did not appear in the composer dialog',
          'ELEMENT_NOT_FOUND',
          labels,
        );
      }
    } else if (images.length === 1) {
      const [upOk, upMsg] = await client.uploadFile(0, dialogFileInputPath, images[0]!);
      if (!upOk) {
        return await failStep(client, 'upload_images', upMsg || 'uploadFile failed', 'UNKNOWN', labels);
      }
    } else {
      const [upOk, upMsg] = await client.uploadFiles(0, dialogFileInputPath, images);
      if (!upOk) {
        return await failStep(client, 'upload_images', upMsg || 'uploadFiles failed', 'UNKNOWN', labels);
      }
    }

    // 等媒体预览（blob）出现后再点发布；太早点禁用按钮等于没点
    if (mediaType === 'image') {
      const blobReady = await waitForCount(client, dialogBlobImagePath, (n) => n >= 1, 30_000, 500);
      if (blobReady < 1) {
        return await failStep(
          client,
          'wait_media_preview',
          'Image blob preview did not appear after upload',
          'ELEMENT_NOT_FOUND',
          labels,
        );
      }
    }
    // 预览出来后按钮可能仍短暂禁用，再等可点内层出现
    await sleep(1500);
    const submitReady = await waitForCount(client, dialogPostInnersPath, (n) => n >= 1, 20_000, 500);
    if (submitReady < 1) {
      return await failStep(
        client,
        'find_post_button',
        'Post button not found after media ready',
        'ELEMENT_NOT_FOUND',
        labels,
      );
    }

    for (let i = 0; i < 6; i++) {
      const clicked = await clickSubmitOnce(client);
      client.taskLog(`publish click #${i + 1} ok=${clicked}`);
      await sleep(1200);
      const [, , boxLeft] = await client.getNodeCount(0, dialogTextboxPath);
      if ((boxLeft ?? 0) === 0) break;
    }

    const closeWaitMs = mediaType === 'video' ? 45_000 : 30_000;
    const closed = await waitForCount(client, dialogTextboxPath, (n) => n === 0, closeWaitMs, 500);
    if (closed !== 0) {
      return await failStep(
        client,
        'publish_post',
        'Post dialog did not close after clicking Post',
        'UNKNOWN',
        labels,
      );
    }

    const [finalUrlOk, , finalUrl] = await client.getPageUrl();
    return {
      succ: true,
      msg: mediaType === 'video' ? 'group video post published' : 'group image post published',
      data: {
        host,
        mediaType,
        content,
        mediaCount,
        finalUrl: finalUrlOk ? finalUrl : host,
      },
    };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    return await failStep(client, 'unexpected', reason, 'UNKNOWN', labels);
  }
}

const manifest = await loadAutomationManifest();
const taskConfig = await loadTaskRunConfig<TaskRunConfig>(manifest);

process.exit(
  await XportBrowserClient.run((client) => runAutomation(client, taskConfig)),
);
