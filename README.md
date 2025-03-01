# DecodePro - Công cụ mã hóa và giải mã hiện đại

## Giới thiệu

DecodePro là một ứng dụng web hiện đại giúp bạn mã hóa và giải mã dữ liệu một cách nhanh chóng và dễ dàng. Được thiết kế đơn giản nhưng mạnh mẽ, DecodePro hỗ trợ nhiều định dạng mã hóa thông dụng mà các lập trình viên và chuyên gia bảo mật thường xuyên sử dụng.

## Các tính năng chính

- **Base64 Encode/Decode**: Mã hóa và giải mã dữ liệu sử dụng định dạng Base64, thường được sử dụng trong email và web.
- **URL Encode/Decode**: Xử lý các chuỗi URL có chứa các ký tự đặc biệt.
- **HTML Encode/Decode**: Chuyển đổi giữa các ký tự HTML entities và ký tự thông thường.
- **JWT Decode**: Giải mã và hiển thị thông tin từ JSON Web Tokens.
- **Hex to ASCII/ASCII to Hex**: Chuyển đổi giữa văn bản và mã hóa hexadecimal.
- **Binary to Text/Text to Binary**: Chuyển đổi giữa văn bản và mã nhị phân.

## Cách sử dụng

1. **Chọn phương thức**: Sử dụng dropdown menu để chọn loại mã hóa/giải mã bạn muốn thực hiện.
2. **Nhập dữ liệu**: Nhập văn bản cần xử lý vào khung "Input".
3. **Xử lý**: Nhấn nút "Process" hoặc đợi 1 giây sau khi nhập liệu (ứng dụng sẽ tự động xử lý).
4. **Xem kết quả**: Kết quả sẽ hiển thị trong khung "Output".
5. **Sao chép kết quả**: Nhấn nút "Copy" để sao chép kết quả vào clipboard.

### Các tính năng bổ sung

- **Chế độ sáng/tối**: Chuyển đổi giữa chế độ sáng và tối dễ dàng.
- **Hoán đổi Input/Output**: Nhấn nút "Swap" để hoán đổi nội dung giữa Input và Output.
- **Dán từ clipboard**: Dán nhanh nội dung từ clipboard vào khung Input.
- **Xóa**: Xóa nhanh nội dung trong các khung văn bản.
- **Phím tắt**: Hỗ trợ các phím tắt như Ctrl+Enter để xử lý và Ctrl+Shift+C để sao chép kết quả.

## Cài đặt và chạy ứng dụng

1. **Tải mã nguồn**:

   ```
   git clone https://github.com/your-username/decodepro.git
   ```

2. **Mở ứng dụng**:
   - Mở file `index.html` trong trình duyệt web.
   - Không cần cài đặt thêm thư viện hay máy chủ, ứng dụng hoạt động hoàn toàn trên trình duyệt.

## Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Tạo giao diện người dùng hiện đại và đáp ứng
- **JavaScript**: Xử lý logic mã hóa/giải mã
- **LocalStorage**: Lưu trữ tùy chọn người dùng (như chế độ sáng/tối)

## Tương thích

DecodePro hoạt động trên tất cả các trình duyệt hiện đại, bao gồm:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## Bảo mật

Tất cả quá trình xử lý đều diễn ra ở phía client (trình duyệt của bạn). Không có dữ liệu nào được gửi đến máy chủ, đảm bảo tính riêng tư và bảo mật cho thông tin của bạn.

---

© 2025 DecodePro - Một công cụ mã hóa/giải mã hiện đại.
