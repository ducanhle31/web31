//Yêu cầu 1:

/* Khi nhấn vào button 
“Change content” hiển thị một nội dung quote bất kỳ */
const p =document.querySelector("#text");
const btn1= document.querySelector("#btn-1");
const btn2= document.querySelector("#btn-2");
const btn3= document.querySelector("#btn-3");
function changeText(){
    p.textContent = "xin chào ";
}
btn2.onclick =function(){
    p.style.color = "#" + Math.floor(Math.ramdom()* 16777215). toString(16);
};
function ramdom_rgba(){

}
btn3.addEventListener("click", function(){
    p.style.backgroundColor = ramdom_rgba;
})
/*  Yêu cầu 2:

Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX 
    - cần viết 1 function để random màu HEX)*/


/* /* Yêu cầu 3:

Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu 
    RGB - cần viết 1 function để random màu RGB)* /
    */
   
