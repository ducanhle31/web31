// event listener
var btn = document.getElementById("btn");

/* btn.onclick = function(){
    console.log('viec 1');
     console.log("viec 2");
      console.log("viec 3");
} */

/* btn.addEventListener('click', function(e){
    console.log('Event 1');
});
btn.addEventListener("click", function (e) {
  console.log("Event 2");
});
btn.addEventListener("click", function (e) {
  console.log("Event 3");
}); */
// json ( javascript object notation)
// là 1 định dạng dữ liệu ( chuỗi)
// JSON: Numer, booleam, null, aray, object

// mã hóa / giải mã
// encode  / decode

// stringify: Từ javascript types -> JSON
// Parse: từ JSON -> javascript types
var json = ' {"name":"duc anh","age":18}';
var object = JSON.parse(json);
console.log(object);

console.log(JSON.stringify({ name: "ducanh", age: 18 }));
/* 
//chuyển jsonString sang dạng object
const jsonString = '{"name": "Son Dang", "age": 18}';
const obj = JSON.parse(jsonString);

//chuyển object sang dạng JSON
var object = {
  name: "Son Dang",
  age: 18,
};
var jsonString = JSON.stringify(object);
 */

// PROMISE
//đồng bộ (sync)
//bất động bộ (async)

// setTimeout là tác vụ bất động bộ (async)
setTimeout(function () {
  console.log("Dòng này sẽ in ra sau");
}, 0);

// Đây là tác vụ đồng bộ (sync)
console.log("Dòng này sẽ in ra trước");

/// promise (pain)
// Callback hell
//pyramid of doom

// concept
var promise = new Promise(function (resolve, reject) {
  //logic
  // thành công resolve()
  // thất bại reject()
  reject(123);
});
promise
  .then(function () {
    console.log("Successully!");
  })
  .catch(function () {
    console.log("fal");
  })
  .finally(function () {
    console.log("done!");
  });

/*  //Promise có 3 trạng thái:

Pending
Fulfilled
Rejected
 */

// chain
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })

  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  });

// VD
function hell(value, cb) {
  cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell
hell(1, function (valueFromA) {
  hell(valueFromA + 1, function (valueFromB) {
    hell(valueFromB + 1, function (valueFromC) {
      hell(valueFromC + 1, function (valueFromD) {
        console.log(valueFromD + 1);
      });
    });
  });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
}

notHell(1)
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    console.log(value + 1);
  });

// promise.resolve

var promise = new Promise(function (resolve, reject) {
  // logic
  //  resolve('success!');
  //
  reject("Error!");
});
promise
  .then(function (result) {
    console.log("result:", result);
  })
  .catch(function (err) {
    console.log("err:", err);
  });
// promise.reject
// promise. all
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});
var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});
Promise.all([promise1, promise2]).then(function (result) {
  var result1 = result[0];
  var result2 = result[1];
  console.log(result1.concat(result2));
});

//

var users = [
  {
    id: 1,
    name: "duc anh",
  },
  {
    id: 2,
    name: " son dăng",
  },

  {
    id: 3,
    name: " duc son",
  },
  //...
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "anh chua ra video ",
  },
  {
    id: 2,
    user_id: 2,
    content: " vua ra xong ",
  },
];
// lấy comments
// từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

// Fake API
var getComment = function (comments) {
  return new Promise(function (resolve) {
    setTimeout(resolve(comments), 3000);
  });
};

function getUserByID(userId) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userId.includes(user.id);
    });
    setTimeout(resolve(result), 3000);
  });
}

getComment(comments)
  .then(function (comments) {
    var userId = comments.map(function (comment) {
      return comment.user_id;
    });
    console.log(userId);
    return getUserByID(userId).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("content");
    console.log(commentBlock);
  });
        
//Fetch
var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi)
.then(function(response){
  return response.json();
})
.then(function(posts){
  console.log(posts);
});