/* const h1= document.querySelector(".heading");
console.log(h1.textContent);// văn bản bên trong 
console.log(h1.innerHTML);// cấu trức html bên trong 
console.log(h1.id);// giá trị của thuộc tính id
console.log(h1.className);// giá trị của thuôc jtinhs class
console.log(h1.title);// giá trị của thuộc tính title
console.log(h1.tagName);
console.log(h1.nodeType);

h1.textContent =" hahahahahah";
h1.innerHTML="";


console.log(h1.title);
h1.title="helooo";


console.log(h1.dataset.abc);
h1.dataset.abc= " âsasasasa";
 

 h1.classList.add("my-heading","xx-heading");
 h1.classList.remove("heading","xx-heading");
 */
 const div = document.querySelector("div#app");
const p =document.createElement("p");
//const text= document.createTextNode(" xin chào");

p.innerHTML=(" hello ae <b><i>ANH Anh</i></b>");
p.id= (" paragrap");
p.classList.add=(" paa");
p.style.color=("red");

div.append(p);
div.before(p);
 
const img= document.createElement("img");
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRWss2vw7rZB95fYUGqESrx3VTDOy6NWxKw&usqp=CAU";
img.alt =" girl xinh";
div.append(p, img);

///


const createPara = function(text, classes){
    const p = document.createElement("p");
    p.innerHTML = " hello ae <b><i>ANH Anh</i></b>";
    p.id = " paragrap";
    p.classList.add = " paa";
    p.style.color = "red";
};


div.append(
  createPara(" he looooooo"),
  createImg(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRWss2vw7rZB95fYUGqESrx3VTDOy6NWxKw&usqp=CAU"
  )

);


