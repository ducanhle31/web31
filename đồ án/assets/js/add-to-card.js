/* add to card */

/*  */

const cartDOM = document.querySelector(".cart__items");
const addToCartBtn = document.querySelectorAll(".btn__add__to__cart");
const cartCounter = document.querySelector(".cart__counter");
const totalCost = document.querySelector(".total__cost");
const totalCount = document.querySelector("#total__counter");
const checkOutBtn = document.querySelector(".check_out_btn");

// gán cá giá trị vào localstorage
let cartItems = JSON.parse(localStorage.getItem("cart_items")) || [];

document.addEventListener("DOMContentLoaded", loadData);

checkOutBtn.addEventListener("click", () => {
  /* alert("Đơn hàng đã được thanh toán");  */

  /* var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000); */
swal("Đặt hàng thành công", "Xin vui lòng kiểm tra email của bạn", "success", {
  button: false,
  timer: 3000,
});
  clearCartItems();
});

cartCounter.addEventListener("click", () => {
  cartDOM.classList.toggle("active");
});
// duyệt qua các phần tử
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let parentElement = btn.parentElement;

    const product = {
      id: parentElement.querySelector(".product__id").value,
      name: parentElement.querySelector(".product__name").innerText,
      image: parentElement.querySelector("#image").getAttribute("src"),
      price: parentElement
        .querySelector(".product__price")
        .innerText.replace("VND", ""),
      quantity: 1,
    };

    let isIncart =
      cartItems.filter((item) => item.id === product.id).length > 0;

    // kiểm tra xem đã tồn tại chưa
    if (!isIncart) {
      addItemToTheDOM(product);
    } else {
      var x = document.getElementById("snackbarr");
      x.className = "shows";
      setTimeout(function () {
        x.className = x.className.replace("shows", "");
      }, 3000);
      /*  alert("Sản phẩm đã có trong giỏ hàng"); */
      return;
    }

    const cartDOMItems = document.querySelectorAll(".cart_item");

    /* lặp qua từng mặt hàng trong giỏ hàng và kiểm tra xem ID sản phẩm có
    khớp với ID của sản phẩm được thêm vào giỏ hàng.lần lượt xử lý
    tăng số lượng mặt hàng, giảm số lượng mặt hàng và loại bỏ mặt hàng
    từ giỏ hàng. */
    cartDOMItems.forEach((individualItem) => {
      if (individualItem.querySelector(".product__id").value === product.id) {
        // increrase (tăng)
        increaseItem(individualItem, product);
        // decrease( giảm)
        decreaseItem(individualItem, product);
        // Removing Element (xóa)
        removeItem(individualItem, product);
      }
    });

    cartItems.push(product);
    calculateTotal();
    saveToLocalStorage();
  });
});
/**
 * Hàm tải dữ liệu từ mảng cartItems và cập nhật DOM cho phù hợp, bao gồm
 * Tăng, giảm và loại bỏ các mục và tính toán tổng.
 */

function loadData() {
  if (cartItems.length > 0) {
    cartItems.forEach((product) => {
      addItemToTheDOM(product);

      const cartDOMItems = document.querySelectorAll(".cart_item");

      cartDOMItems.forEach((individualItem) => {
        if (individualItem.querySelector(".product__id").value === product.id) {
          // increrase
          increaseItem(individualItem, product);
          // decrease
          decreaseItem(individualItem, product);
          // Removing Element
          removeItem(individualItem, product);
        }
      });
    });
    calculateTotal();
  }
}

/**
 * Hàm tính toán tổng chi phí của các mặt hàng trong giỏ hàng và hiển thị giá vnd
 */
function calculateTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity * item.price * 1000;
  });

  totalCost.innerText =
    total.toLocaleString(undefined, { minimumFractionDigits: 0 }) + " VND";

  totalCount.innerText = cartItems.length;
}


function saveToLocalStorage() {
  localStorage.setItem("cart_items", JSON.stringify(cartItems));
}
/**
 * Chức năng xóa các mục giỏ hàng khỏi bộ nhớ cục bộ và DOM.
 */

function clearCartItems() {
  localStorage.clear();
  cartItems = [];

  document.querySelectorAll(".cart__items").forEach((item) => {
    item.querySelectorAll(".cart_item").forEach((node) => {
      node.remove();
    });
  });
  cartDOM.classList.toggle("active");
  calculateTotal();
}


function addItemToTheDOM(product) {
  // Thêm Mục mới vào Dom
  cartDOM.insertAdjacentHTML(
    "afterbegin",
    `<li class="panel-item"></li>
    <li class="cart_item panel-card">
   
    <div class="row topcard-small">
  
            <input type="hidden" class="product__id" value="${product.id}">
             <figure class="item-banner">
   <img id="product_image"   width="60"
         height="60" src="${product.image}" alt="" srcset="">
     </figure>
         
    </div>
          
         <div class=" row card-small">
           <h4 class="product__name ">${product.name}</h4>
           <div class="btn-card-small">

 <button class="btn__small tru" action="decrease">&minus;</button>
            <h4 class="product__quantity">${product.quantity}</h4>
            <button class="btn__small" action="increase">&plus;</button>
          <span id="product__price">${convertMoney(product.price)}</span>
           <button class="btn__small btn_remove" action="remove">&times;</button>
           </div>
         </div>
    
          
       </li>`
  );
}


function increaseItem(individualItem, product) {
  individualItem
    .querySelector("[action='increase']")
    .addEventListener("click", () => {
      // Mảng thực tế
      cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          individualItem.querySelector(".product__quantity").innerText =
            ++cartItem.quantity;
          calculateTotal();
          saveToLocalStorage();
        }
      });
    });
}

function decreaseItem(individualItem, product) {
  individualItem
    .querySelector("[action='decrease']")
    .addEventListener("click", () => {
      // all cart items in the dom
      cartItems.forEach((cartItem) => {
        // Actual Array
        if (cartItem.id === product.id) {
          if (cartItem.quantity > 1) {
            individualItem.querySelector(".product__quantity").innerText =
              --cartItem.quantity;
            calculateTotal();
            saveToLocalStorage();
          } else {
            // Loại bỏ phần tử này và gán các elements mới cho mảng cũ
            console.log(cartItems);

            cartItems = cartItems.filter(
              (newElements) => newElements.id !== product.id
            );
            individualItem.remove();

            calculateTotal();
            saveToLocalStorage();
          }
        }
      });
    });
}


function removeItem(individualItem, product) {
  individualItem
    .querySelector("[action='remove']")
    .addEventListener("click", () => {
      cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          cartItems = cartItems.filter(
            (newElements) => newElements.id !== product.id
          );
          individualItem.remove();
          calculateTotal();
          saveToLocalStorage();
        }
      });
    });
}
