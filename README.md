# Facebook Group Post

> Matrix posting for Facebook Groups — one setup, many groups × many captions × many accounts, so your marketing reaches farther with less manual work.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Repository:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## What this automation does

This is an **AutoAI** desktop automation project. After you import it into the client, you can:

| Capability | What you get |
|---|---|
| **Post to Facebook Groups** | Open a group page and publish a post with caption + images, or caption + one video |
| **Matrix scale-out** | Paste many group URLs and many captions → every group gets every caption (`groups × captions` tasks) |
| **Multi-account browsers** | Tasks are round-robin across the fingerprint browsers you select — one account per browser, load balanced |
| **Media pools** | Image pool with N images per post (cycles), or video pool (1 video per post, cycles) |
| **Optional anonymous** | If the group composer has a “Post anonymously” switch, turn it on automatically |
| **Human-like schedule** | Daily post limit, random interval between posts, daily time window (supports overnight windows, e.g. China night ≈ US daytime) |

### Why “matrix posting” matters

Manual group marketing does not scale: one person, one account, one group at a time.

With this project you can, for example:

- **20 groups × 5 captions = 100 posts**, scheduled across several browsers  
- Rotate copy and media so the same offer reaches different communities without copy-paste fatigue  
- Run overnight windows so posts land when your audience is online  

**Production task runs use almost no AI tokens.** Tokens are mainly for building, adapting, or fixing with the agent (see [Customize](#customize-when-you-need-changes)).

> Use only with accounts and groups you own or are authorized to operate. Follow Facebook’s terms and local law.

---

## Requirements

- **AutoAI desktop client** ([Download](https://www.xrobot.tech/en/download/))
  - **Windows:** x86 / x64 only (not ARM)
  - **macOS:** Apple silicon (M-series) only (not Intel)
- An AutoAI account ([Register](https://www.xrobot.tech/en/register/) · [Sign in](https://www.xrobot.tech/en/login/))
- At least one **fingerprint browser** in the client, already logged into Facebook
- **Quota:** AutoAI includes **one free fingerprint browser environment** by default. For matrix / multi-account posting, buy more browser slots in the client or [account center](https://www.xrobot.tech/en/account/) as needed

---

## Quick start (customer path)

### 1. Download the client

Open the download page and install for your OS:

- English: [https://www.xrobot.tech/en/download/](https://www.xrobot.tech/en/download/)
- 简体中文: [https://www.xrobot.tech/zh/download/](https://www.xrobot.tech/zh/download/)

### 2. Register and sign in

1. [Register](https://www.xrobot.tech/en/register/) with email (verification code / password).
2. [Sign in](https://www.xrobot.tech/en/login/) on the website (optional) and **sign in with the same account inside the desktop client**.

### 3. Prepare a Facebook browser

AutoAI ships with **one free built-in fingerprint environment** (**Platform browser**). That is enough to try a single account. Matrix posting works better with **several browsers (accounts)** — purchase extra fingerprint browser quota when you need more, then create additional environments.

1. In the client sidebar open **Browser**.
2. Prefer **Platform browser** (built-in free fingerprint). You can also use BitBrowser / AdsPower if you already run those apps.
3. **Create** a browser → **Start** it → turn on **Cast** if you want to watch the screen.
4. In that browser, **manually log in to Facebook** and confirm the session works.
5. Need more accounts? Buy additional browser environments, create more profiles, log each into Facebook, then select them all when creating the task group.

### 4. Import this project from GitHub

1. Open **Automation → Import** (or your client’s GitHub import entry).
2. Paste: `https://github.com/yuhaya/facebook-group-post` (or `yuhaya/facebook-group-post` / `git@github.com:yuhaya/facebook-group-post.git`).
3. Confirm and **Start import**.
4. The project appears under **Automation → My automations**.

### 5. Create a task group (matrix run)

1. Open **Automation → My automations**.
2. **Click the project card body** (not the expert button at the bottom).
3. Fill the form, for example:
   - **Group URLs** — one Facebook group URL per line  
   - **Captions** — separate posts with `==sep==` (a single caption may contain line breaks)  
   - **Browsers** — select one or more logged-in fingerprint browsers  
   - **Media** — images (and images-per-post) or videos  
   - **Schedule** — daily limit, min/max interval, daily time window  
4. **Create** → review planned times and task count → confirm.
5. If asked, turn on the top-right **Tasks** master switch so queued work actually runs.
6. Watch progress under **Task group management**.

**Task count rule:**  
`number of groups × number of captions` (empty caption list still allows media-only posts as one empty caption). Generated tasks are then **round-robin** across selected browsers.

---

## Form fields (cheat sheet)

| Field | Meaning |
|---|---|
| Group URLs | One URL per line; each group receives every caption |
| Captions | Split with `==sep==`; each group posts every caption |
| Post anonymously | On → enable anonymous when the composer offers it |
| Media type | Images (multi) or Video (one per post) |
| Images / Videos | Media pool; taken in order and cycles when exhausted |
| Images per post | How many images from the pool go into each post |
| Browsers | Fingerprint environments that execute the posts |
| Daily limit | Max posts per browser per day (within the time window) |
| Interval min / max | Random delay between posts (seconds) |
| Daily time start / end | Allowed posting window; **start > end** means overnight (e.g. `22:00` → `06:00`) |

---

## Customize (when you need changes)

Official scripts may not match your group UI language, account type, region, or special rules. That is expected — adapt with the built-in agent.

### Recharge compute (needed for agent chat)

Agent development / troubleshooting consumes **AI compute** (not the production batch runner).

1. On the website, **recharge USD balance** from your account wallet.
2. In the desktop client, open your profile / wallet → **Buy AI compute**.
3. Start or continue an agent conversation after compute is available.

If the client says you need compute before chatting, follow the on-screen recharge → purchase steps.

### Ask the agent to modify this project

**A. Change features / adapt your environment (Development mode)**

1. On the card in **My automations**, click **Browser automation expert**.
2. Pick a **started** debug browser when asked.
3. Describe what you want in plain language, for example:
   - “Only post to groups I’m already a member of; skip join walls.”
   - “Add a second media set and rotate by weekday.”
   - “Step X failed on my account — fix via cast and trial-run.”
4. Ask the agent to **trial-run** after changes, then create a new task group from the card.

**B. Fix a failed batch (Troubleshooting mode)**

1. **Automation → Task group management**
2. On the failed group, use **Investigate and fix**
3. The agent works against that group’s failures

### Go further

- Quick start: [Getting started](https://www.xrobot.tech/blog/en/guide/getting-started) · [Build from scratch](https://www.xrobot.tech/blog/en/guide/custom-automation)
- Case center: [https://www.xrobot.tech/en/cases/](https://www.xrobot.tech/en/cases/)
- Download / Register / Login: [Download](https://www.xrobot.tech/en/download/) · [Register](https://www.xrobot.tech/en/register/) · [Login](https://www.xrobot.tech/en/login/)

---

## Tips for better matrix results

- Prefer **several browsers (accounts)** over blasting from one account. Start with the **free** environment; buy more fingerprint slots when you scale the matrix.
- Keep **intervals and daily limits** conservative; overnight windows help hit overseas daytime.
- Vary captions and media; avoid identical spam across groups.
- Confirm each browser is logged into Facebook **before** creating a large task group.
- Production runs ≈ **0 tokens**; save compute for customization and repair.

---

## Project info

| | |
|---|---|
| Package id | `fb-group-post` |
| Display name | Facebook Group Post |
| Runtime | AutoAI desktop (browser automation) |
| License / use | For use with the AutoAI client; operate only authorized accounts |

`AGENTS.md` in this repo is for **in-client agent developers**, not end-customer setup. Customers should follow this README.

---

## Support

- Product site: [https://www.xrobot.tech](https://www.xrobot.tech)
- Contact / docs: use the site navigation (*Contact*, *Docs*)

If something fails after import, use **Development** or **Troubleshooting** mode above rather than editing scripts by hand unless you know the project layout.
