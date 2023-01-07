// Synchronous ( đồng bộ)

// Asynchronous ( bất đồng bộ )
// tối ưu đc thời gian chạy của chương trình
// nhược điểm chương trình khó đọc , khó hiểu , khó kiểm soát .

// các cách triển khai mã bất đồng bộ trong JS
/* 
- CALLBACK 

*/

/* const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js";
document.body.append(script);
script.onload= function(){
    console.log(_.concat([1,2],[3,4]));
};
script.onerror = function(){
    console.log(" lỗi , không cài đaẹt đc ");
}; */

//
/* let doA = new promise(function (resolve, reject) {
  setTimeout(() => {
    resolve();
  }, 3000);
});

let doB = new promise(function (resolve, reject) {
  setTimeout(() => {
    resolve();
  }, 3000);
});
let doC = new promise(function (resolve, reject) {
  setTimeout(() => {
    resolve();
  }, 3000);
});
let doD = new promise(function (resolve, reject) {
  setTimeout(() => {
    resolve();
  }, 3000);
});
 */
//
/* 
doA()
  .then(doB)
  .then(doC)
  .then(doD)
  .catch(function (reason) {})
  .finally(function () {});
 */

//
/*  try{
    const resultA= await doA();
     const resultB= await doB();
      const finalResult= await doC(resultA,resultB);
      console.log(finalResult);
  }catch (err){
    console.log("error:", err);
  }finally{}
 */

//đồng bộ dữ liệu vs phía server
// gọi API
// cú pháp fetch( url, option)

try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log("không thể lấy dưc liệu:", err);
}
