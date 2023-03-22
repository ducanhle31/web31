/* Thực hành sử dụng Enhanced object literals */
/* Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
Gợi ý: Sử dụng phương thức reduce */
function arrToObj(arr) {
  return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}
const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
console.log(obj1);
const obj2 = arrToObj([
  ["name", "Duc Long"],
  ["age", 18],
  ["address", "Ha Noi"],
]);
console.log(obj2);
/* rest parameter */
function logger ([a,b, ...rest]){
    console.log(a);
     console.log(b);
      console.log(rest);
}
logger([1,2,3,456,678,890]);
/* sprest */
