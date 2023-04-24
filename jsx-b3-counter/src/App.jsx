import { useState } from "react";
import Counter from "./Counter";
import "./styles.css";

// Component render khi nào
// 1 - Khi nó được gọi lần đầu tiên, ví dụ <App />
// 2 - Khi trạng thái của component thay đổi
// 3 - Khi props thay đổi

// Render như nào
// Component chỉ là một hàm bình thường, nhận vào các tham số, tính toán và trả về 1 đoạn JSX
// Mỗi khi component render, thì chạy các câu lệnh từ đầu đến cuối và trả về JSX
export default function App() {
  // Có thể ghi nhớ giá trị giữa mỗi lần render
  const [
    /* Biến tham chiếu đến giá trị trạng thái */
    date,
    /* Hàm để cập nhật giá trị trạng thái và kích hoạt render lại */
    setDate,
  ] = useState(
    /**
     * Giá trị ban đầu, chỉ có tác dụng trong lần đầu tiên render,
     * và có thể chứa bất kỳ kiểu dữ liệu nào
     */
    new Date()
  );

  // Với mỗi lần render thì tạo ra 1 setTimeout mới
  setTimeout(() => {
    const newDate = new Date();
    // Đặt lại giá trị trạng thái thành ngày giờ hiện tại
    // Và render lại để hiển thị ngày giờ
    setDate(newDate);

    // Nếu như trạng thái mới phụ thuộc vào trạng thái cũ
    // Thì nên sử dụng 1 hàm
    // Hàm này sẽ nhận vào trạng thái mới nhất tại thời điểm hàm được gọi
    // setDate((previousDate) => {
    // return newState
    // })
  }, 1000);

  return (
    <div>
      {date.toLocaleString()}

      <Counter />
    </div>
  );
}

// Các lỗi dễ mắc phải
// 1. Sử dụng useState với giá trị ban đầu không đúng
// 2. Sử dụng useState ở trong vòng lặp, if else, hàm, ... (chung cho tất cả các hooks)
// 3. Sử dụng useState ở sau câu lệnh return, ví dụ if else return (chung cho tất cả các hooks)
// 4. Sử dụng useState không phải trong component (custom hook) (chung cho tất cả các component)
// 5. Thay đổi trực tiếp giá trị của state, không thông qua hàm setState
// 6. setState là hàm bất đồng bộ
// 7. Dữ liệu trong hàm setState bị cached
// 8. Sử dụng quá nhiều useState
// 9. Giá trị trạng thái thì không tự động merge khi thay đổi
// 10. Sử dụng useState cho các giá trị không cần thiết
