let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
console.log(arr);
// In ra độ dài (số lượng phần tử) của arr
console.log( arr.length);
// In ra phần tử thứ 3 trong mảng
console.log(arr[2]);
// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);
// In ra phần tử cuối cùng của mảng
console.log( arr[4]);
// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[-1]);
// Sử dụng vòng lặp in ra từng giá trị trong arr
for (const value of arr) {
  console.log(value);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
for( let i=0; i< arr.length; i++){
    console.log('index: ${i}, value: ${arr[i]}');
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
for (let i = 0; i < arr.length; i++) { arr.reverse();
  console.log("index: ${i}, value: ${arr[i]}");
}
// Thêm "Ba"  cuối mảng sử dụng phương thức push()
arr.push("Ba");
console.log(arr);
// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
arr.splice(4,0);
console.log(arr);
// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
arr.unshift("Béo Ú");
console.log(arr);
// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
arr.pop();
console.log(arr);
// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
arr.shift();
console.log(arr);
// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả
arr.slice(0,1);
console.log(arr);
// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
arr.slice();
console.log(arr);
// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
arr.slice(2);
console.log(arr);
// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
arr.splice(1,2);
console.log(arr);
// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()
arr.splice(1, 0, "Nhi", "Hùng");
console.log(arr);
// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()
let indexOfBa = arr.indexOf("Ba"); //chỉ mục
console.log(indexOfBa);

// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả
let indexOfThao = arr.indexOf("Thảo"); //chỉ mục
console.log(indexOfThao);
// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả
console.log(arr.includes("Mai Anh"));
// Sử dụng alert() in arr, chú ý kết quả


// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console
arr.join("");
console.log(arr);
// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
arr.reverse();
console.log(arr);
// Đổi chỗ 2 phần tử đầu và cuối mảng

// Xóa toàn bộ phần tử trong mảng
arr.length=0;
console.log(arr);
/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
function sum() {
    let arra=[ 1,2,3,4,5,6,7];
    let sum=0;
    for(let i=0; i< arra.length; i++){
       sum += arra[i];

    }console.log(sum);
return arr.reduce((a, b) => a + b, 0);
}
sum();

/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {

}
