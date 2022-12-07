// sort
//forEach
// filter
// findindex
// map
// reduce
//

/// callback
// một hàm ( giá trị hàm ) đc truyền vào một hàm khác dưới dạng đối số
//vd
function demo() {
  console.log("Demo");
}
let oother = function () {
  console.log("other");
};

demo; // giá trị hàm
demo(); //cuộc gọi hàm

function demo() {
  //code
  return 1;
}

function dosomething(callback) {
  const data = 10;
}
dosomething(demo); // demo= callback

//khai báo trực tiếp hàm tại vị trí sử dụng
let x = 123;
let other = function () {};
dosomething(123);
dosomething(other);
dosomething(function () {});

//forEach  làm 1 cái j đó vs mỗi phần tử trong mảng
function pow(n) {
  console.log(n ** 2);
}
let aarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < aarr.length; i++) {
  pow(aarr[[i]]);
}
aarr.forEach(pow);
//vd2
const arr = [" ba", "anh", "tài", "minh"];
/* for ( let i=0; i<arr.length; i++){
    console.log(arr[[i]]);}
  */

arr.forEach(console.log);

/// find- tìm ra giá trị đầu tiên khớp với điều kiện
const arrr = [1, 4, 6, 8, , 9, 3, 10, 234, 4534, 234234, 45454, 665, 66, 777];
function isPrime(n) {
  if (n < 2) 
    return false;
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
/* let firstPrime;
 for ( let i=0; i<arrr.length; i++) {
    const n= arrr[i];
    if ( isPrime(n)){
        firstPrime=n;
        break;
    }
 }

 console.log( firstPrime); */

let firstPrime = arrr.find(isPrime);


/// filter- tìm tất cả các giá trị khớp với điều kiện
 /* let array=[];
 for (let i = 0; i < aarr.length; i++) {
    if( isPrime (array[i])){
        array.push(arr[i]);
    }
 }
 console.log(array)
 */
let result = arr.filter( isPrime);
console.log( result);

//findIndex - tìm chỉ mục của giá trị đầu tiên khớp với điều kiện
/* let index;
for (let i = 0; i < arrr.length; i++){
    if ( isPrime (arrr[i])){
        index=i;
        break;

    }
}
console.log(index);
 */
let index =arrr.findIndex(isPrime);
console.log(index);


/// map - biến đổi các phần tuer trong mảng thành một giá trị khác 
 function double(n  ){
    return n*n;
 }
 // biến đổi cac số trong mảng thành double của số đó 
 // const arrrr= [ 3,4,6,7,9] 
 // [ 9,7,34,62]
 
/* let double = arrr.map(double);
console.log(double);
 */
 


 // reduce- tính tổng  
 /*  let sum = 0;
 for (let i = 0; i < aarr.length; i++) {
   sum = sum+ aarr[i];
 }
 console.log(sum); */ 

    /* */function add(giatritichluy, phantutrongmang) {
      return giatritichluy + phantutrongmang;
    }
    let total = aarr.reduce; 
console.log(add);
// sort sắp xếp
const  ab=[ 10,23,454,677,887,999];
// sort mặc định sắp xếp theo dạng chuỗi 
function compare(a,b){
    //só dương nếu a lớn hơn b
    // số âm nếu a nhỏ hơn b
    if (a>=b) return 1;
    else return -1;

}
ab.sort(compare);
console.log(ab);


///
let xx= 12.324234234;
console.log(x.toFixed(2));
// trong khoảng 0 -10
Math.floor(Math.random()*10);
// trong khoảng 10 -100
Math.floor(Math.random() * 90)+10;



let myName=" Đức Anh";
// có tính chất tương tự mảng 
// [ 'A', 'v', 'vc','s'];
console.log(myName[1]);
console.log( myName.length);
console.log(myName.includes("a"));
console.log(myName.indexOf("a"));
console.log(myName.slice(0,3));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());


let now = new Date();
console.log(now);
 let birthday= new Date( " 1998-01-03");
 console.log(birthday);

 //print
  birthday.toDateString();
  birthday.toTimeString();

 // get 
 birthday.getFullYear();
 birthday.getMonth();// 0-11;
 birthday.getDay();// 0-6;
 //set
 //khi giá trị vượt quá giới hạn sẽ tự động ( công trừ) bù trừ vào phần tử
  birthday.setMonth();// 0-11;

