//DOM EVENT
// GÁn thông qua thuôc tính trên thẻ ( gọi hàm)
/*   <button onclick="handerClick()">click click</button> */

/* const audio = new Audio("./file.mp3");
function handleClick() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
} */
// gán thông qua js

/* 
const button = document.querySelector("button");
button.onclick = handleClick; */

// ưu tiên dùng addEventListener
/* 
const audio = new Audio("./file.mp3");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}); */

// có 3 cách gán trình xử lý
// c1 thông qua thuôc tính HTML  on..
// thông qua thuộc tính dom on...
// thông qua phương thức addEventListener

// BÀI TẬP
//Yêu cầu 1:
/* Khi nhấn vào button 
“Change content” hiển thị một nội dung quote bất kỳ */
/*  Yêu cầu 2:

Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX 
    - cần viết 1 function để random màu HEX)*/
/* 
/* Yêu cầu 3:
Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu 
    RGB - cần viết 1 function để random màu RGB)* /
    */
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi debitis enim tempora rerum provident magnam velit corporis! Ipsam voluptatum commodi consectetur molestias sit quod alias ex eius veritatis. Dicta.</p>

    <button id="btn-1" onclick="changeText">Change content</button>
    <button id="btn-2">Change color</button>
    <button id="btn-3">Change background</button>
    <script src="./bt.js"></script>
</body>
</html> */

/*  const p = document.querySelector("#text");
   const btn1 = document.querySelector("#btn-1");
   const btn2 = document.querySelector("#btn-2");
   const btn3 = document.querySelector("#btn-3");

   function changeText() {
     p.textContent = "xin chào ";
   }

   btn2.onclick = function () {
     p.style.color = "#" + Math.floor(Math.ramdom() * 16777215).toString(16);
   };

  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }

   btn3.addEventListener("click", function () {
     p.style.backgroundColor = ramdom_rgba;
   });

 */

// sự kiện
/*  box.addEventlistener("adblclick", function(){
    console.log("Double click on div");
   });

    box.addEventlistener("mouseentex", function () {
      console.log("Mouse on div");
    });

    box.addEventlistener("mouseleave", function () {
      console.log("Mouse out of div");
    }); */
// BÀI TẬP
/* Yêu cầu :

Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột
Mỗi lần nhấn chuột chỉ có 1 hình tròn được xuất hiện */
/* function createCircle(){
   let div = document.createElement("div");
div.classList.add("circle");
return div;
}

window.addEventListener("click", function(e){
const circle = createCircle();
const x = e.x;
const y= e.y;
circle.style.top ='${y-10}px';
circle.style.left ='${x-10}px';
document.body.append(circle);

});
const cat = document.querySelector(".cat");
window.addEventListener("click", function(e){
const x = e.x;
const y = e.y;
cat.style.cssText=" top: ${y-10}px;
left: ${x-10px};";
}); */

// nhấn phím nào hiển thị phím đó

const box = document.querySelector(".box");
function createKeys(key) {
  const button = document.createElement("button");
  button.classList.add("key");
  button.textContent = key.toUpperCase();
  return button;
}
window.addEventListener("keypress", function (e) {
  const key = e.key;

  const alt = e.altKey;
  const shift = e.shiftKey;
  const ctrl = e.ctrlKey;
  const span = document.createElement("span");

  if (ctrl) span.append(createKeys("ctrl"));
  if (shift) span.append(createKeys("shift"));
  if (alt) span.append(createKeys("alt"));
    span.append(createKeys(key));
  box.innerHTML= "" // xóa nội dung hiện tại
  box.append(span);
});
