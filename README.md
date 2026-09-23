# CHẤP TẤT — Chess with Fate

MVP web app cờ vua biến thể, chạy tĩnh trên GitHub Pages.

## Chạy local

Không cần build. Mở `index.html` bằng trình duyệt hoặc dùng Live Server.

## Deploy GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload `index.html`, `styles.css`, `app.js`, `README.md`.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/root`.
6. Save.

## Công nghệ

- HTML / CSS / JavaScript
- chess.js 1.4.0 tải từ CDN
- Không cần backend ở MVP
- Local 2 Players

## 4 bộ bài

- Handicap — 20 lá
- Opening Fate — 20 lá
- Midgame Fate — 20 lá
- Last Chance — 20 lá

## Lưu ý MVP

Các card được khai báo dưới dạng data để mở rộng dễ dàng. Những effect phức tạp có thể yêu cầu viết custom board-state resolver sâu hơn trong bản tiếp theo, đặc biệt các lá làm thay đổi vị trí quân hoặc cho phép nước đi vượt luật cờ vua tiêu chuẩn.
