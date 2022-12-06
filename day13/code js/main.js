// 1 Tính tổng các phần tử là số của mảng
function getTotal(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

var array = [4, 5, -3];
console.log(getTotal(array));
//cách 2
function getTotal(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
var array = [4, 5, 10];
console.log(getTotal(array));

//2 for loop ( lấy ra phần tử của mảng)
var myarr = [" anh", "hoa", "bình", "hà", "nga"];
var arrLength = myarr.length;
for (var i = 0; i < arrLength; i++) {
  console.log(myarr[i]);
}

/// 3 tính tổng giá trị đơn hàng
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotall(arr) {
  return arr.reduce((total, obj) => obj.price + total, 0);
}
console.log(getTotall(orders));
/* // Reduce
const getTotal = (orders) => orders.reduce((total, item) => total + item.price, 0)

// For…in
function getTotal(orders) {
    var sum = 0
    for(var index in orders) {
        sum += orders[index].price
    }
    return sum
}

// For…of
function getTotal(orders) {
    var sum = 0
    for(var index of orders) {
        sum += index.price
    }
    return sum
}

// For
function getTotal(orders) {
    var sum = 0
    var arrayLength = orders.length
    for(var i = 0; i < arrayLength; i++) {
        sum += orders[i].price
    }
    return sum
}

// ForEach
function getTotal(orders) {
    var sum = 0
    orders.forEach(order => {
        sum += order.price
    })
    return sum
}
*/

// 4 for --in
var info = {
  name: " ducanh",
  age: 18,
  address: "ha noi",
};
for (var key in info) {
  console.log(info[key]);
}

/// 5
function run(object) {
  var arr = [];
  for (var key in object) {
    arr.push("Thuộc tính " + key + " có giá trị " + object[key]);
  }
  return arr;
}
console.log(run({ name: "Nguyen Van A", age: 16 }));
// kết quả
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

///  for / of
var abc = " anh";
for (var value of abc) {
  console.log(value);
}
// kết quả
//  a
// n
// h

//// in ra các số chẵn
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

 
// đệ quy  // xác định điểm dừng, logic handle ==> tạo ra điểm dừng
// tính giai thừa 
function giaithua(number){
  /*  // dùng vòng lặp:
    var Output=1;
    for( var i=number; i>0; i--){
        Output= Output*i;
    }
    return Output; */

    // đệ quy
    if (number>0){ return number*giaithua(number-1);}
    return 1;
}
console.log(giaithua( 6));




/// mảng 
   //các môn thể thao có điểm số yêu thích lớn hơn 5.
const ssports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(ssports) {
    return ssports.filter((ssport) => ssport.like > 5);
}


// Kỳ vọng
console.log(getMostFavoriteSport(ssports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]



// Array map() method

/// reduce 
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function  getTotalGold (ar){
    var sum = ar.reduce(function(a,b){
        return a+b.gold
    },0)
    return sum
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23



/// flat . làm phẳng mảng
// gộp các phần tử thành mảng mới
 var depthArray =[ 1,2,[3,4],5,6,[7,8,9]];
 var flatArray= depthArray.reduce(function(flatOutput, depthItem) {
  return flatOutput.concat(depthItem)
 },[]);
 console.log(flatArray);



 ///