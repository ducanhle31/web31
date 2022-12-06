let dog = {
  name: "Xu",
  age: 3,
  bread: " Bắc Hà",
  gender: "Cái",
  color: " Nâu đỏ",
  legs: 4,
  favoritefood: " thịt gà",
  eat() {
    console.log(this.name, " is eating", this.favoritefood);
  },
  run() {
    console.log(this.name, "is running on", this.legs, "legs");
  },
  bark() {
    console.log("Woof woof woof ...");
  },
};
//name
console.log(dog);
//Viết câu lệnh để in `name` ra `console`
console.log(dog.name);
//Viết câu lệnh để in `favorite food` ra `console`

console.log(dog.favoritefood);
//Viết câu lệnh để thay đổi `color` thành `Brown`
dog.color = "Brown";
console.log(dog.color);

// Viết câu lệnh để tăng `age` thêm `2` tuổi
dog.age = 5;
console.log(dog.age);

//Viết câu lệnh gọi phương thức `eat()`
console.log(dog.eat());
//Viết câu lệnh gọi phương thức `run()`
console.log(dog.run());
//Sử dụng vòng lặp để in ra tất cả _tên thuộc tính (key)_ ra `console`
for (let key in dog) {
  console.log(key);
}
//Sử dụng vòng lặp để in ra tất cả _giá trị (value)_ ra `console`
for (let key in dog) {
  value = dog[key];
  console.log(value);
}
//Viết câu lệnh để thêm một thuộc tính `isCrazy` vào `dog` với giá trị boolean tùy ý
dog.isCrazy = "dễ thương";
console.log(dog);
/*  
-   Viết câu lệnh để thêm một phương thức `crazy()` vào `dog`, kiểm tra nếu `isCrazy` là `false` thì in ra theo mẫu
 `{name} is not crazy`, nếu `isCrazy` là `true` thì sử dụng vòng lặp để gọi 2 phương thức `run()` và `bark()` 5 lần 
 (con chó bị điên), kết quả sẽ in ra `console` dạng `{name} is running on {legs} legs ... Woof woof woof
  ... {name} is running ... Woof woof woof`*/
dog.crazy = function () {
  console.log("crazy: " + "bị điên")
};
dog.crazy();
for (let isCrazy in dog) {
  console.log(this.name, "is not crazy");
};



 //Viết câu lệnh đảo ngược giá trị của `isCrazy`
 dog.isCrazy="bị điên";
 console.log( dog.isCrazy);
//Viết câu lệnh gọi phương thức `crazy()`
console.log(dog.crazy());
// Viết câu lệnh xóa `isCrazy` khỏi `dog`
delete dog.isCrazy;
console.log(dog);
// Viết câu lệnh gọi phương thức `crazy()`, chú ý kết quả in ra và comment lý do vì sao lại in ra như vậy
console.log(dog.crazy());


//Sử dụng vòng lặp để in ra tất cả thuộc tính và giá trị tương ứng (không phải phương thức) trong `dog` ra `console` (sử dụng `typeof` để kiểm tra kiểu) theo mẫu `{key} có giá trị là {value}`
  for (typeof  value == empty[key] ) {
   
    console.log(key, value);
  }




//Viết câu lệnh khai báo một biến mới `clone` và gán giá trị của `dog` cho `clone`
let clone = dog;
console.log( clone);
//Viết câu lệnh chỉnh sửa `name` trong `clone` thành một tên khác bất kỳ
clone.name=" xu xu";
console.log(clone.name);


// Viết câu lệnh in `clone` và `dog` ra `console`, chú ý kết quả
console.log(dog , clone);
// Viết câu lệnh khai báo một object mới `copy` rỗng `{}`
let coppy ={};
console.log( coppy);
// Sử dụng vòng lặp để sao chép từng thuộc tính và giá trị (bao gồm cả phương thức) trong `dog` sang `copy`
 for (let key in dog) {
  coppy[key]= dog[key];

   console.log(key, value);
 }

//Viết câu lệnh chỉnh sửa `name` trong `copy` thành tên khác bất kỳ
coppy.name=" xu xu xu xu";
console.log(coppy);
// Viết câu lệnh in `copy` và `dog` ra `console`, chú ý kết quả
console.log( coppy, dog);