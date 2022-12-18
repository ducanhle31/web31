/* const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];
const firstCharUpper = function (fruit) {
  return fruit[0].toUpperCase() + fruit.slice(1).toLowerCase(0);
};
const createtoListItem = function (fruit) {
  const li = document.createElement("li");
  li.textContent = firstCharUpper(fruit);
  li.className = "fruit-item";
  return li;
};

const createFruitList = function (fruitList){ 
const ul =document.createElement("ul");
for(let i=0; i<fruitList.length; i++){
    const fruit= fruitList[i];
    const li = createtoListItem(fruit);
    ul.append(li);

}
return ul;
};
const div = document.querySelector("div#app");
div.append(createFruitList(fruitList)); */



/* const div = document.querySelector("div#app");
const items = fruitList.map(toListItem).join("");
const ul = document.createElement("ul");
ul.className = "fruit-list";
ul.innerHTML = items;
div.append(ul); */



// bt2
/* Cho một mảng `todos` chứa các object tương ứng với một task cụ thể, viết hàm `createTodoList` tạo danh sách công việc (sử 
    dụng thẻ `ul`, `li` hoặc `div`) và thêm vào `div#app`,
 áp dụng style cho todo list thông qua class, style khác nhau tùy thuộc vào trạng thái task `completed` là 
 `true` hay `false` */
const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML",
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS",
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript",
  },
];
const div = document.querySelector("div#app");
const createTodoItem = function(todo){
    const li = document.createElement("li");
    li.classList.add ("todo-item");
    li.textContent= todo.content;
    if (todo.completed){li.classList.add("completed");}
    return li;
};
const createTodoList =function(todo){
    const ul =document.createElement("ul");
    ul.className =" todo-list";
    for (let i=0; i<todos.length; i++){
        const todo = todos[i];
        const li = createTodoItem(todo);
        ul.append(li);
    } return ul;
};
div.append(createTodoList(todos));


//bt3 
/* Cho một mảng `products` chứa dánh sách các sản phẩm, viết hàm `createProduct` tạo ra 1 card sản phẩm,
và `createProductList` để render ra một danh sách ra `div#app`, áp dụng css để tạo layout cho danh sách sản phẩm */
