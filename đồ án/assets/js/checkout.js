const city = document.querySelector("#city");
console.log(city);
const districts = document.querySelector("#districts");
console.log(document.body);
const wards = document.querySelector("#wards");
/* gọi api */

async function getData() {
  const data = await fetch("https://provinces.open-api.vn/api/?depth=3")
    .then((response) => response.json())
    .catch((rejected) => {
      console.log(rejected);
    });
  return data;
}

/* Mã này đang tìm nạp dữ liệu từ API bằng cách sử dụng hàm 'getData()' và sau đó sử dụng trả về
Dữ liệu để điền vào menu thả xuống 'Thành phố' với các tùy chọn. Phương thức 'map()' được sử dụng để lặp lại
mảng dữ liệu và tạo một phần tử tùy chọn HTML cho mỗi thành phố, sau đó được gắn vào 'thành phố'
menu thả xuống sử dụng thuộc tính 'innerHTML'. */
getData().then((data) =>
  data.map((data) => {
    city.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
  })
);
let a;
let changeCity = () => {
  districts.value = "default";
  districts.style.display = "block";
  districts.innerHTML = `<option value="default">Chọn huyện</option></select
            >`;
  wards.value = "default";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;
  let citydata = city.value;
  if (citydata == "default") return;
  getData().then((data) => {
    a = data.findIndex((x) => x.codename === citydata);

    data[a].districts.map((data) => {
      districts.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
    });
  });
};

let changedistricts = () => {
  wards.value = "default";
  wards.style.display = "block";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;

  let districtsdata = districts.value;
  if (districtsdata == "default") return;
  getData().then((data) => {
    b = data[a].districts.findIndex((x) => x.codename === districtsdata);
    data[a].districts[b].wards.map((data) => {
      wards.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
    });
  });
};

city.addEventListener("change", changeCity);
districts.addEventListener("change", changedistricts);

const nameForm = document.getElementById("name");
const phoneForm = document.getElementById("phone");
const emailForm = document.getElementById("email");
const sendForm = document.querySelector(".container.form button");
console.log(sendForm);
// name
let inputName = () => {
  nameForm.value = nameForm.value.toUpperCase();
  if (!nameForm.value) {
    document.querySelector(
      ".form-message.name"
    ).innerHTML = `<div class="text-danger">Vui lòng nhập tên</div>`;
  } else document.querySelector(".form-message.name").innerHTML = "";
};

nameForm.addEventListener("focusout", inputName);
// phone

let inputPhone = () => {
  if (!phoneForm.value) {
    document.querySelector(
      ".form-message.phone"
    ).innerHTML = `<div class="text-danger">Vui lòng nhập số điện thoại</div>`;
  } else document.querySelector(".form-message.phone").innerHTML = "";
};

phoneForm.addEventListener("focusout", inputPhone);

//email

let inputEmail = () => {
  let emailText = document.querySelector(".form-message.email");
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let result = regex.test(emailForm.value);
  if (!emailForm.value) {
    emailText.innerHTML = `<div class="text-danger">Vui lòng nhập email</div>`;
  } else if (!result) {
    emailText.innerHTML = `<div class="text-danger">Xin hãy nhập lại email</div>`;
  } else if (result) {
    emailText.innerHTML = "";
  }
};

emailForm.addEventListener("focusout", inputEmail);



"use strict";

// all initial elements
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");


const totalElem = document.querySelector("#total");

// Vòng lặp: Đối với Thêm sự kiện trên nhiều nút 'Tăng' &; 'Giảm'

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    //thu thập giá trị của 'số lượng' textContent,
    //dựa trên 'gia tăng' click
    let increment = Number(this.previousElementSibling.textContent);

    // cộng với giá trị biến 'tăng' bằng 1
    increment++;

    //Hiển thị giá trị biến 'Tăng' trên phần tử 'Số lượng'
    //dựa trên 'gia tăng'  click
    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    //thu thập giá trị của 'số lượng' textContent,
    //dựa trên 'gia tăng' click
    let decrement = Number(this.nextElementSibling.textContent);

    /// trừ đi giá trị biến 'giảm' bằng 1 dựa trên điều kiện
    decrement <= 1 ? 1 : decrement--;

    // Hiển thị giá trị biến 'Decrement' trên phần tử 'quantity'
    // dựa trên 'nút giảm' 
    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}

// Chức năng: để tính tổng giá sản phẩm
const totalCalc = function () {
  // khai báo tất cả biến ban đầu

  let total = 0;

  // Vòng lặp: để tính giá trị 'tổng phụ' từ mỗi sản phẩm
  for (let i = 0; i < quantityElem.length; i++) {
    total +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }

  // hiển thị giá trị biến 'subtotal' trên phần tử 'subtotalElem'
  totalElem.textContent = total.toFixed(3);
};



