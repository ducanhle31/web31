//html DOM (Document Object Model )
//gôm 3 thành phần
// 1 Element   ( <h1> </h1> , <a> </a> , ...)
// 2 Attribute  ( class="", id="", src="", ... )
// 3 Text   ( Html đom , abc , ...)

// -------------------------
// javascript : browSer | sever ( node JS)
// Browser : HTML -> DOM -> WEB API

/// Element
// ID
var headingNode = document.getElementById("headingg");
console.log(headingNode);
// Class
var headingNodes = document.getElementsByClassName("heading");
console.log(headingNodes);
// TAG
var headingNodes = document.getElementsByTagName("p");
console.log(headingNodes);
//CSS selector
var headingNode = document.querySelector("Heading");
console.log(headingNode);

var headingNodess = document.querySelector(".Box.heading-2");
console.log(headingNodess);

//
/* Thực hành get element


Cho trước file HTML, các bạn hãy sử dụng các phương thức truy 
vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

productsListElement: thẻ div có class là products-list.
firstProductElement: thẻ div đầu tiên có class là product.
buttonElements: tất cả các thẻ button.*/
var productsListElement = document.querySelector("div.products-list");
console.log(productsListElement);
var firstProductElement = document.querySelector("div.product:first-child");
console.log(firstProductElement);
var buttonElements = document.getElementsByTagName("button");
console.log(buttonElements);

/// Attribute
/* var headingElement = document.querySelector('a');
headingElement.href = 'headingg'; */
//thêm
/* var headingElementt = document.querySelector('a');
headingElementt.setAttribute( 'id','heading'); */
// lấy ra
/* console.log(headingElementt.getAttribute( 'id','heading')); */
// ví dụ
/*Thực hành với DOM attribute

Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:

Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a. 
 
 <h1>F8 - Học lập trình để đi làm</h1>
    <p>Truy cập <a>fullstack.edu.vn</a> để học lập trình miễn phí các bạn nhé!!!</p>

var tagH1 = document.querySelector('h1')
var tagP = document.querySelector('p')
var tagA = document.querySelector('a')

tagH1.title = "F8 - Học lập trình để đi làm"
tagH1.setAttribute('data-title',"F8 - Học lập trình để đi làm")
tagA.href = "https://fullstack.edu.vn/"
tagA.target = "_blank"

*/

/// Text
/* var headingElement = document.querySelector('.heading');
console.log(headingElement.innerText) 
/ thêm || thay đổi
headingElement.innerText ='New heading';
headingElement.textContent ='New heading';

*/
// ví dụ
//Các bạn hãy thay đổi nội dung của thẻ h1 thành F8 - Học lập trình để đi làm.
/* document.querySelector("h1").innerText = "F8 - Học lập trình để đi làm"; */

/* var boxElement = document.querySelector('.box');
boxElement.innerHTML ='<h1>Heading</h1>';
console.log(document.querySelector('h1').innerText); */

// ví dụ
/* <body>
    <ul>
        
    </ul>
</body>
Các bạn hãy viết hàm render nhận vào 1 tham số là html, 
hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.

function render(html) 
{ var course = document.querySelector('ul').innerHTML = html};
*/

// VD2
/* 
Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item
 của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.
 
  <ul class="courses-list">

    </ul>


    var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var at = document.querySelector(".courses-list");
    var a= courses.map(function(KH){
        return "<li>"+KH+"";}).join("");
        at.innerHTML =a;}

 render(courses)
 */

///Ôn tập các thuộc tính của Node
//clientHeight: Chiều cao của element.
//clientWidth: Chiều rộng của element.

//DOM CSS

/* var boxElement = document.querySelector(".box");
boxElement.style.width = "100px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
  with: "100px",
  height: "50px",
  backgroundColor: "green",
});
console.log(boxElement.style.width);
 */
//ClassList Property
/* var boxElement = document.querySelector(".box");
console.log(boxElement.classList); */
// add (thêm)
//boxElement.classList.add("red", "blue");
// kiểm tra 1 class có tồn tại không ?
//console.log(boxElement.classList.contains("red"));
// xóa
//boxElement.classList.remove("red");
/* setTimeout(()=>{boxElement.classList.remove("red");},1000); */

// VD
/* Thêm class title vào thẻ h1
Thay thế class sub-title ở thẻ p bằng class content

 <h1>Title</h1>
    <p class="sub-title">Content</p>

    document.querySelector('h1').classList.add('title');

document.querySelector('p').classList.replace('sub-title', 'content'); */
// VD2
/* thêm class box vào các thẻ div

 <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>
    <div>Box</div>

    document.querySelectorAll('div').forEach(el => el.classList.add('box')); */

/// DOM events
// click vào elemnt nào thì hiện element đó 
var h1Elements = document.querySelectorAll("h1");
for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].onclick = function (e) {
    console.log(e.target);
  };
}

// Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
var button = document.querySelector("button");
button.onclick = function () {
  button.style.color = "#fff";
};
//cách 2
/* document.querySelector("button").onclick = function () {
  this.style.color = "#fff";
}; */