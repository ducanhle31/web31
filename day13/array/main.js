let arr=[ 1,2,3];
console.log(arr);

arr.length = 5;
console.log(arr);
// duyệt qua chỉ mục
for (
     let i=0; i< arr.length; i++
){
    console.log( arr[i]);
};
// duyệt qua giá trị
 for( let value of arr){ console.log(value)};
 // chuyển thành chuỗi 
 arr.toString();// ghép với dấu ,    1,2,3
 String(arr); // 1,2,3
 arr.join(); // mặc định là dấu ,   1,2,3
 arr.join(""); //123
 arr.join("-"); //1-2-3


 //thêm vào cuối
 arr[arr.length]=50;



 arr.push( 60, 80, 70); //8
 arr.Pop(); //80


arr.slice(); // coppy toàn bộ
arr.slice(3);// coppy từ index 3 đến cuối 
arr.slice( 0, 5);// coppy từ đầu đến index 4
console.log(arr);

/// tìm chỉ mục => tìm chỉ mục đầu tiên 
let indexOf60 = arr.indexOf(60); //chỉ mục 
console.log(indexOf60);

let indexOf100= arr.indexOf(100); // -1

let xindexOf60= arr.lastIndexOf(60);

arr.reverse();// đảo ngược thứ tự






