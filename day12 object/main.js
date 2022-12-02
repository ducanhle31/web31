// literal object
let empty= {};// đối tượng rỗng 
let anh = {
  name: " le duc anh",
  age: 23,
  tall: 1.6,
  dad: {
    name: "le van a",
    age: 55,
  },
  eat(food) {
    console.log(" ăn ", food);
    console.log("ngủ");
  },
};
console.log( anh.name);


// truy cập thông tin 
// dot notation - cú pháp dáu chấm 
// tên đối tượng . tên thuôc tính
anh.age;
anh.dad.name;
anh. tall;
anh.eat( );
console.log( anh.age);


//thêm 
empty.name= " anhh";
empty.age= 30;
  // sửa 
  empty.age = 32;
  empty.name= " duc";
  // xóa 
  delete empty.name;
  delete empty.age;

  empty.func = function(){
    console.log(" một phuoeng trình");
  };
  // duyệt qua các tthuoojc tính .
  for(let key in empty){
    value= empty[ key];
    console.log( key, value);
  }


// this tham chiếu đến đói tượng gọi phương thức 
// this là đối tượng đang thực hiện hành vi 
//this là đoiid tượng trc dấu chấm 

speak(){
  console.log(" xin chào ",
  this.name, "năm nay tôi ", this.age, "tuổi ");
}

toString(){
  return this.name;
}
valueOf(){
  return this.age;
}
let clone= person;
console.log( )


