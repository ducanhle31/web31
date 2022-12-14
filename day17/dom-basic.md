# DOM Exercises

## Basic

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM Basic</title>
    </head>
    <body>
        <h1 class="heading">Hello DOM</h1>

        <img class="avatar" src="" alt="" />

      	<a class="profile" href="">Profile</a>

        <ul class="favorite">
            <li>A</li>
            <li>Play game</li>
            <li>Listen music</li>
            <li>D</li>
        </ul>

        <div class="clock">Bây giờ là</div>

        <p class="bio">
            Thầy giáo ba đẹp trai Thầy giáo Ba đẹp trai Thầy giáo ba đẹp trai
            Thầy giáo Ba đẹp trai Thầy giáo ba đẹp trai Thầy giáo Ba đẹp trai
            Thầy giáo Ba đẹp trai Thầy giáo ba đẹp trai Thầy giáo ba đẹp trai
            Thầy giáo ba đẹp trai Thầy giáo ba đẹp trai Thầy giáo ba đẹp trai
            Thầy giáo Ba đẹp trai Thầy giáo Ba đẹp trai Thầy giáo ba đẹp trai
        </p>

        <p class="num-of-words"></p>

        <table class="list-students">
            <tbody>
                <tr>
                    <td>Giang Hồng Sơn</td>
                </tr>
                <tr>
                    <td>Bùi Lan Nhi</td>
                </tr>
                <tr>
                    <td>Hoàng Thị Ngọc Linh</td>
                </tr>
            </tbody>
        </table>

        <script>
            const heading = "Thầy giáo Ba đẹp trai 🤓";
            const avatar = "https://i.imgur.com/2rP9dFO.png";
            const profile = "https://twitter.com/banx9x";
        </script>
    </body>
</html>

```

Cho nội dung HTML như trên, thực hiện các yêu cầu sau:

1. Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
2. Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
3. Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
4. Thay đổi `href` của thẻ `a` thành giá trị của `profile`
5. Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
6. Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
7. Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
8. Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`
9. Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai`