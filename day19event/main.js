// gán thông qua thẻ
/* const audio = new Audio("./file.mp3");
function handerClick() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
} */

// gasn thoong qua js
/* const button = document.querySelector("button");
button.onclick = handerClick; */
// ưu tiên dùng
const audio = new Audio("./file.mp3");
const button = document.querySelector("button");
button.addEventListener("click",function(){
    if( audio.paused){
        audio.play();
    }else{audio.pause();}
});


// có 3 cách gán trình xử lý 
// c1 thông qua thuôc tính HTML  on..
// thông qua thuộc tính dom on...
// thông qua phương thức addEventListener 

/* Yêu cầu :

Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột
Mỗi lần nhấn chuột chỉ có 1 hình tròn được xuất hiện */
/* function createCircle(){
   let div = document.createElement("div");
div.style.cssText ='position: fixed;
background-color: red;
width: 20px;
height: 20px;
border-radius: 50%;';

return div;
}

window.addEventListener("click", function(e){
const circle = createCircle();
const x = e.x;
const y= e.y;
circle.style.top ='${y-10}px';
circle.style.left ='${x-10}px';
document.body.append(circle);

}) */
