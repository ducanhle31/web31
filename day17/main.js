function isTable(node){
    return node.tagName === "TABLE";
}

const table = Array.form(document.body.children).find(isTable);
const rows= table.rows;
for( let i=0; i< rows.length; i++){
    rows[i].cells[i].style.backgroundColor = "red";
     rows[i].cells[rows.length-i-1].style.backgroundColor = "red";
}

// TỔNG KẾT 
// môi trường thực thi mã js trong trình duyệt đc cung cấp bởi đối tượng window
// cung cấp một số API ( bOM , DOM) để lm vc thao tác với cửa sổ trình duyệt , với nội dung hiển thị 
// cấu trúc phân cấp đối tượng 
// node tất cả mọi thứ đều là node
// document cũng là 1 node
//Element bao gồm các node là các thẻ html
// mỗi 1 thẻ html chỉ có 1 inderface riêng mô tả các thuộc tính , phương thức của riêng nó 
// node list và html colecction không phải là mảng chỉ có thể duyệt qua bằng vòng lặp for hoặc chuyển qua mảng thông qua array,form


// api cũ : getElementby..
// API mới querySelector, closet

// get.. thì gọi đc trên document
//query.. thì có thể gọi trên baats kỳ node nào 
// GET .. thì kết quả tự đông jcaajp nhật 
// QUERY,, thì không tự đông cập nhật
//GET.. thì có nhiều hàm khác nhau, mỗi hàm sử dụng 1 cú pháp khác nhau 
//QUERy.. sử dụng chung mmootj phương thức cho tất cả các loại tìm kiếm
