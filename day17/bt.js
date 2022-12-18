const heading = "Thầy giáo Ba đẹp trai 🤓";
const avatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLSkmJAvKi1CJkIqFh2Of5CWfp8cZ2HKRRw&usqp=CAU";
const profile = "https://twitter.com/banx9x";
/* Cho nội dung HTML như trên, thực hiện các yêu cầu sau:

1. Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
2. Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
3. Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
4. Thay đổi `href` của thẻ `a` thành giá trị của `profile`
5. Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
6. Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
7. Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
8. Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`
9. Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai` */

//1. Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
document.querySelector("title").innerHTML = heading;
//2. Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
document.querySelector("h1").innerHTML = heading;
//3. Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
document.querySelector("img").src = avatar;

//4. Thay đổi `href` của thẻ `a` thành giá trị của `profile`
var el = document.getElementsByTagName("a");
el[0].href = profile;
//5. Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
document.querySelector("li").innerText = "Code application";
//6. Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
const nodeList = document.querySelectorAll("li");
nodeList[3].innerText="Sleep";
//7. Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
   var today = new Date();
   var date =
     today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
   var time =
     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = "Bây giờ là:" + " " + time+ ", " + date;

   document.querySelector(".clock").innerHTML = dateTime;
  
//8. Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung
// vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`
let arr = document.querySelector("p.bio").innerText.toLowerCase().split(" ");

let baArr = arr.filter(function (item) {
  if (item === "ba") return item;
});
let length = baArr.length;
document.querySelector(
  `p.num-of-words`
).innerText = `Ở đoạn văn trên có ${length} từ 'Ba'`;
/* để thay thế tất cả nội dung trùng khớp mà không phân biệt trường hợp chữ in hoa hay chữ thường thì ta sử dụng biểu thức chính quy sau:

<script>
    var text = "Tài liệu học HTML và tài liệu học CSS";
    var a = text.replace(/HọC/gi, "tham khảo");
</script> */

//9. Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
let newRow = document
  .querySelector("table")
  .insertRow(0)
  .insertCell(0)
  .appendChild(document.createTextNode("Thầy giáo Ba siêu cấp đẹp trai"));
//10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai` 
