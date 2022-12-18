# DOM Exercises

## Intermediate

### Fruits List

Cho một mảng chứa tên các loại quả, viết hàm `createFruitList` tạo danh sách các loại quả tương ứng (sử dụng thẻ `ul` và `li` hoặc `div`) và thêm vào `div#app`, áp dụng style cho list sử dụng class hoặc inline style

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fruit List</title>
    </head>
    <body>
        <div id="app">
            
        </div>


        <script src="script.js"></script>
    </body>
</html>
```

```js
// script.js
const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];
```

### Todo List

Cho một mảng `todos` chứa các object tương ứng với một task cụ thể, viết hàm `createTodoList` tạo danh sách công việc (sử dụng thẻ `ul`, `li` hoặc `div`) và thêm vào `div#app`, áp dụng style cho todo list thông qua class, style khác nhau tùy thuộc vào trạng thái task `completed` là `true` hay `false`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fruit List</title>
    </head>
    <body>
        <div id="app"></div>

        <script src="script.js"></script>
    </body>
</html>
```

```javascript
// script.js
const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML"
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS"
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript"
  }
];
```

### Product List

Cho một mảng `products` chứa dánh sách các sản phẩm, viết hàm `createProduct` tạo ra 1 card sản phẩm, và `createProductList` để render ra một danh sách ra `div#app`, áp dụng css để tạo layout cho danh sách sản phẩm

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fruit List</title>
    </head>
    <body>
        <div id="app"></div>

        <script src="script.js"></script>
    </body>
</html>
```

```javascript
// script.js
// dữ liệu sản phẩm lấy từ https://fakestoreapi.com/products
```

