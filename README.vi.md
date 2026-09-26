# Đăng bài nhóm Facebook (marketing ma trận)

> Một lần cấu hình: nhiều nhóm × nhiều nội dung × nhiều tài khoản trình duyệt fingerprint. Tăng tiếp cận, giảm copy-paste.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Kho mã:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## Tự động hóa này làm gì

Dự án cho máy khách desktop **AutoAI**. Sau khi nhập:

| Khả năng | Kết quả |
|---|---|
| **Đăng nhóm Facebook** | Mở nhóm và đăng chữ + ảnh, hoặc chữ + một video |
| **Mở rộng ma trận** | Nhiều URL + nhiều nội dung → **mỗi nhóm nhận mọi nội dung** (nhiệm vụ = nhóm × nội dung) |
| **Nhiều trình duyệt/tài khoản** | Nhiệm vụ chia **round-robin** theo fingerprint đã chọn (1 trình duyệt = 1 tài khoản) |
| **Kho media** | Kho ảnh (N ảnh/bài, lặp vòng) hoặc video (1 video/bài) |
| **Ẩn danh tùy chọn** | Bật “Đăng ẩn danh” nếu hộp soạn có công tắc |
| **Lịch gần người thật** | Giới hạn ngày, khoảng cách ngẫu nhiên, khung giờ (hỗ trợ qua đêm) |

### Vì sao “ma trận”

Marketing nhóm thủ công khó mở rộng.

Ví dụ:

- **20 nhóm × 5 nội dung = 100 nhiệm vụ**, lịch trên nhiều trình duyệt  
- Cùng ưu đãi với copy/media khác nhau tới nhiều cộng đồng  
- Khung qua đêm để đăng khi khán giả online  

**Chạy nhóm nhiệm vụ production gần như không tốn token AI.** Token chủ yếu cho phát triển / chỉnh / sửa bằng agent.

> Chỉ dùng tài khoản/nhóm bạn sở hữu hoặc được ủy quyền. Tuân thủ điều khoản Facebook và luật địa phương.

---

## Điều kiện

- **Máy khách desktop AutoAI** ([Tải xuống](https://www.xrobot.tech/vi/download/))
  - **Windows:** chỉ x86 / x64 (không ARM)
  - **macOS:** chỉ Apple silicon (dòng M; không Intel)
- Tài khoản AutoAI ([Đăng ký](https://www.xrobot.tech/vi/register/) · [Đăng nhập](https://www.xrobot.tech/vi/login/))
- Ít nhất một **trình duyệt fingerprint** đã đăng nhập Facebook
- **Hạn mức:** AutoAI tặng **1 môi trường fingerprint miễn phí**. Ma trận / nhiều tài khoản: **mua thêm** trong client hoặc [trung tâm tài khoản](https://www.xrobot.tech/vi/account/)

---

## Bắt đầu nhanh

### 1. Tải client

👉 [https://www.xrobot.tech/vi/download/](https://www.xrobot.tech/vi/download/)

### 2. Đăng ký và đăng nhập

1. [Đăng ký](https://www.xrobot.tech/vi/register/) (email + mã / mật khẩu).
2. Đăng nhập web tùy chọn. **Phải đăng nhập cùng tài khoản trong client desktop.**

### 3. Chuẩn bị trình duyệt Facebook

AutoAI có **1 môi trường fingerprint miễn phí** (**Trình duyệt nền tảng**). Đủ thử một tài khoản. Ma trận tốt hơn với **nhiều trình duyệt (tài khoản)** — mua hạn mức và tạo thêm môi trường khi cần.

1. Thanh bên **Trình duyệt**.
2. Ưu tiên **Trình duyệt nền tảng** (miễn phí tích hợp); BitBrowser / AdsPower cũng được.
3. **Tạo** → **Khởi động** → bật **Cast** nếu muốn xem màn hình.
4. **Đăng nhập Facebook thủ công**.
5. Thêm tài khoản: mua hạn mức → tạo trình duyệt → login từng cái → chọn tất cả khi tạo nhóm nhiệm vụ.

### 4. Nhập từ GitHub

1. **Tự động hóa → Nhập**.
2. Dán: `https://github.com/yuhaya/facebook-group-post` (hoặc `yuhaya/facebook-group-post` / `git@github.com:yuhaya/facebook-group-post.git`).
3. **Bắt đầu nhập**.
4. Xuất hiện ở **Tự động hóa → Tự động hóa của tôi**.

### 5. Tạo nhóm nhiệm vụ (chạy ma trận)

1. **Tự động hóa của tôi**.
2. **Bấm thân thẻ** (không phải nút chuyên gia phía dưới).
3. URL nhóm, nội dung (`==sep==`), trình duyệt, media, lịch.
4. **Tạo** → kiểm tra giờ và số lượng.
5. Bật công tắc tổng **Nhiệm vụ** góc phải trên nếu được hỏi.
6. Theo dõi ở **Quản lý nhóm nhiệm vụ**.

**Quy tắc:** `số nhóm × số nội dung`. Sau đó round-robin trình duyệt.

---

## Trường biểu mẫu

| Trường | Ý nghĩa |
|---|---|
| URL nhóm | Một URL mỗi dòng; mỗi nhóm nhận mọi nội dung |
| Nội dung | Tách bằng `==sep==` |
| Đăng ẩn danh | Bật → bật công tắc nếu có |
| Loại media | Ảnh (nhiều) / Video (một mỗi bài) |
| Ảnh / Video | Kho theo thứ tự rồi lặp |
| Ảnh mỗi bài | Lấy bao nhiêu từ kho |
| Trình duyệt | Môi trường fingerprint thực thi |
| Giới hạn ngày | Tối đa mỗi trình duyệt trong khung |
| Khoảng min / max | Chờ ngẫu nhiên (giây) |
| Bắt đầu / kết thúc ngày | **bắt đầu > kết thúc** = qua đêm (vd `22:00`→`06:00`) |

---

## Tùy chỉnh

Script chính thức có thể lệch ngôn ngữ UI / khu vực — chỉnh bằng agent tích hợp.

### Nạp sức tính toán (cho chat agent)

Chạy production ≈ 0 token. **Sửa / gỡ lỗi bằng agent** tốn **sức tính AI**.

1. Trên web **nạp số dư USD**.  
2. Client → hồ sơ / ví → **Mua sức tính AI**.  
3. Rồi mở chat agent.

### Nhờ agent

**A. Chế độ phát triển** — thẻ → **Chuyên gia tự động hóa trình duyệt** → trình duyệt debug đã chạy → mô tả → **chạy thử script**.

**B. Chế độ khắc phục** — **Quản lý nhóm** → **Điều tra và sửa**.

### Thêm

- [Bắt đầu](https://www.xrobot.tech/blog/vi/guide/getting-started) · [Xây từ đầu](https://www.xrobot.tech/blog/vi/guide/custom-automation)
- [Case](https://www.xrobot.tech/vi/cases/) · [Tải](https://www.xrobot.tech/vi/download/) · [Đăng ký](https://www.xrobot.tech/vi/register/) · [Đăng nhập](https://www.xrobot.tech/vi/login/)

---

## Gợi ý

- Ưu tiên **nhiều trình duyệt (tài khoản)**. Thử **miễn phí 1 cái** trước; mua thêm slot fingerprint khi scale.  
- Khoảng cách và giới hạn dư địa; khung qua đêm cho ban ngày nước ngoài.  
- Đa dạng nội dung/media.  
- Trước lô lớn, kiểm tra login Facebook.  
- Production ≈ **0 token**.

---

## Thông tin dự án

| | |
|---|---|
| ID gói | `fb-group-post` |
| Tên hiển thị | Đăng bài nhóm Facebook |
| Runtime | AutoAI desktop (tự động hóa trình duyệt) |

`AGENTS.md` dành cho nhà phát triển agent trong client. Khách hàng theo README này.

---

## Hỗ trợ

- Site: [https://www.xrobot.tech](https://www.xrobot.tech)

Khi lỗi, ưu tiên **chế độ phát triển / khắc phục**.
