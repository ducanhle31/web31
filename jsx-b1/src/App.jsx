import Heading from "./Heading";
import Image from "./Image";
import "./style.css";

/* const menu = [
  {
    label: "Phim cổ trang",
    href: "/the-loai/co-trang",
    type: "link",
  },
  {
    label: "Phim lẻ",
    href: "",
    type: "dropdown",
    children: [
      {
        label: "Phim Ấn độ",
        href: "/the-loai/chieu-rap/an-do",
      },
      {
        label: "Phim Mỹ",
        href: "https://www.youtube.com/?app",
      },
      {
        label: "Phim 18",
        href: "/the-loai/chieu-rap/18",
      },
    ],
  },
]; */

export default function App() {
  return (
    <div>
      <Heading />
      <Image />

      {/* {menu.map((item) => {
        if (item.type === "link") {
          return <a href={item.href}>{item.label}</a>;
        } else {
          return (
            <div>
              {item.label}
              <ul>
                {item.children.map((item) => (
                  <li>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })} */}
    </div>
  );
}

// Quy tắc khi sử dụng JSX
// 1. Mỗi phần tử thì chỉ có 1 thẻ container duy nhất
// 2. Các thuộc tính sự kiện sử dụng cú pháp camelCase
// 3. Để nhúng giá trị (biểu thức JavaScript) vào JSX thì sử dụng cú pháp { }
// Biểu thức JS có thể nhúng ở bất kỳ vị trí nào (trong văn bản, trong thuộc tính, ...)
// Bên trong { } thì có thể chứa bất kỳ biểu thức JS hợp lệ
// Một giá trị | Một biểu thức tính toán + - * / | Biểu thức logic | Biểu thức 3 ngôi ?
// Conditional rendering (ẩn hoặc hiện một phần tử React theo điều kiện - Biểu thức logic hoặc biểu thức ?)
// 4. Xử lý sự kiện trong JSX
// - Gán trình xử lý thì sử dụng các thuộc tính sự kiện onClick, onMouseOver, ...
// không sử dụng addEventListener
// 5. Khi gán các thuộc tính cho phân tử thì trừ giá trị chuỗi có thể gán trực tiếp trong ""
// Còn lại tất cả loại giá trị khác sử dụng { }
// 6. Mọi phần tử JSX đều phải có phần đóng (thẻ đóng)

// Component
// Đóng gói 1 phần giao diện độc lập, cho phép tái sử dụng
// Về cơ bản thì là một hàm, trả về một đoạn JSX
// Lưu ý về tên Component sử dụng tên viết hoa dạng PascalCase
// Cách sử dụng Component thì sử dụng giống như thẻ HTML bình thường, ví dụ
// <Componenent>Nội dung</Component>
