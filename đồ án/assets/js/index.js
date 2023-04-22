
/*  */


/**
 * Hàm chuyển đổi một số thành một chuỗi tiền tệ đồng Việt Nam được định dạng.
 
 */
 function convertMoney(num) {
   return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
 }

 let products = [
   {
     price: 25000,
     star: 3.5,
     del: 30000,
     type: "new",
     count: "hoaqua",
     id: 1,
     title: "Cam Navel ruột vàng",
     image: "./assets/images/products/hoaqua/cam.webp",
   },
   {
     price: 35000,
     star: 4.5,
     del: 40000,
     type: "new",
     count: "raucu",
     id: 2,
     title: "Khoai tây",
     image: "./assets/images/products/raucu/6.png",
   },
   {
     star: 4.5,
     count: "hoaqua",
     id: 3,
     title: "Chanh tươi",
     price: 15000,
     type: "new",
     del: 25000,
     image: "./assets/images/products/raucu/chanh.webp",
   },
   {
     star: 5,
     count: "hat",
     del: 430000,
     type: "sale",
     title: "Hạt điều trắng",

     id: 4,
     price: 330000,
     image: "./assets/images/products/cacloaihat/hat-dieu.webp",
   },
   {
     count: "hoaqua",
     del: 60000,
     type: "new",
     title: "Đào đỏ mỹ ",
     star: 3.5,
     id: 5,
     price: 55000,
     image: "./assets/images/products/hoaqua/dao.webp",
   },
   {
     star: 4,
     title: "Dâu tây đà lạt",
     count: "hoaqua",
     id: 6,
     price: 200000,

     del: 300000,
     image: "./assets/images/products/hoaqua/dau-tay.webp",
   },
   {
     star: 4,
     title: "Súp lơ xanh",
     count: "raucu",
     id: 7,
     price: 200000,

     del: 300000,
     image: "./assets/images/products/raucu/5.png",
   },
   {
     star: 4,
     count: "hoaqua",
     id: 8,
     type: "noibat",
     del: 280000,

     title: "Dưa lưới nhập khẩu",
     price: 220000,
     image: "./assets/images/products/hoaqua/dua-luoi.webp",
   },

   {
     star: 5,
     count: "hoaqua",
     id: 9,
     type: "new",
     del: 330000,

     title: "Lê xanh Mỹ",
     price: 230000,
     image: "./assets/images/products/hoaqua/le-xanh.webp",
   },
   {
     price: 25000,
     star: 4.5,
     del: 40000,
     type: "new",
     count: "raucu",
     id: 10,
     title: "Tỏi ta",
     image: "./assets/images/products/raucu/garlic_PNG12786.png",
   },
   {
     star: 5,
     count: "hoaqua",
     del: 290000,
     type: "noibat",
     title: "Nho Mỹ nhập khẩu",

     id: 11,
     price: 235000,

     image: "./assets/images/products/hoaqua/nho.webp",
   },
   {
     star: 4,
     count: "hoaqua",
     del: 320000,
     type: "sale",
     title: "Táo xanh Mỹ",

     id: 12,
     price: 240000,

     image: "./assets/images/products/hoaqua/tao.webp",
   },
   /* {
     price: 35000,
     star: 4.5,
     del: 40000,
     type: "new",
     count: "raucu",
     id: 13,
     title: "Gừng",
     image: "./assets/images/products/raucu/ginger_PNG16800.png",
   }, */
   {
     star: 4.5,
     count: "hoaqua",
     del: 200000,
     type: "sale",
     title: "Vải thiều",

     id: 14,
     price: 90000,

     image: "./assets/images/products/hoaqua/vai-thieu.webp",
   },
   {
     star: 5,
     count: "hat",
     del: 400000,
     type: "new",
     title: "Hạt hạnh nhân",

     id: 15,
     price: 320000,
     image: "./assets/images/products/cacloaihat/hanh-nhan.webp",
   },
   {
     star: 5,
     count: "hat",
     del: 300000,

     title: "Hạt điều khô",

     id: 16,
     price: 280000,
     image: "./assets/images/products/cacloaihat/hat-dieu-kho.webp",
   },
   {
     price: 25000,
     star: 4.5,
     del: 30000,

     count: "raucu",
     id: 17,
     title: "Cà chua",
     image: "./assets/images/products/raucu/tomato.png",
   },
   {
     count: "hat",
     del: 490000,
     type: "noibat",
     title: "Quả óc chó",
     star: 5,
     id: 18,
     price: 430000,
     image: "./assets/images/products/cacloaihat/oc-cho.webp",
   },
   {
     star: 3,
     del: 900000,
     count: "haisan",
     title: "Cá hồi",
     type: "sale",
     id: 19,
     price: 720000,
     image: "./assets/images/products/haisan/ca-hoi-ta.webp",
   },
   {
     star: 5,
     count: "hat",
     del: 400000,
     type: "new",
     title: "Ngũ cốc",

     id: 20,
     price: 350000,
     image: "./assets/images/products/cacloaihat/wheat_PNG108.png",
   },
   {
     count: "haisan",
     del: 300000,
     star: 4.5,
     title: "Cua bể",
     type: "new",
     id: 21,
     price: 290000,
     image: "./assets/images/products/haisan/cua-be.webp",
   },
   {
     count: "haisan",
     del: 230000,
     type: "sale",
     title: "Mực Thanh Hóa",
     star: 3.5,
     id: 22,
     price: 130000,
     image: "./assets/images/products/haisan/muc-thanh-hoa.webp",
   },
   {
     star: 5,
     count: "hat",
     del: 200000,
     type: "new",
     title: "Đỗ xanh",

     id: 23,
     price: 150000,
     image: "./assets/images/products/cacloaihat/OIP.jpg",
   },
   {
     count: "haisan",
     del: 530000,
     type: "noibat",
     title: "Tôm biển",
     star: 5,
     id: 24,
     price: 330000,
     image: "./assets/images/products/haisan/tom-bien.webp",
   },
   {
     count: "haisan",
     del: 430000,
     type: "noibat",
     title: "Bạch tuộc",
     star: 5,
     id: 25,
     price: 330000,
     image:
       "./assets/images/products/haisan/thumb_350_b-ch-tu-c-t-i-9520524853278.jpg",
   },
   {
     count: "raucu",
     del: 90000,
     type: "new",
     title: "Hành tây",
     star: 4.5,
     id: 26,
     price: 55000,
     image: "./assets/images/products/raucu/hanh-tay.webp",
   },
   {
     count: "raucu",
     del: 30000,

     title: "Rau cải bẹ",
     star: 5,
     id: 27,
     price: 23000,
     image: "./assets/images/products/raucu/rau-cai.webp",
   },
   {
     star: 5,
     count: "raucu",
     del: 50000,
     type: "new",
     title: "Súp lơ trắng",

     id: 28,
     price: 30000,
     image: "./assets/images/products/raucu/sup-lo.webp",
   },
   {
     star: 4.5,
     count: "thit",
     del: 720000,
     type: "sale",
     title: "Ba chỉ bò mỹ",

     id: 29,
     price: 570000,
     image: "./assets/images/products/tuoisong/ba-chi-bo-my.webp",
   },
   {
     star: 4,
     count: "thit",
     del: 310000,
     type: "sale",
     title: "Sườn lợn Brazil",

     id: 30,
     price: 230000,
     image: "./assets/images/products/tuoisong/suon-lon-brazil.webp",
   },
   {
     star: 5,
     count: "thit",
     del: 630000,
     type: "sale",
     title: "Thịt bò Canada",

     id: 31,
     price: 510000,
     image: "./assets/images/products/tuoisong/thit-bo-canada.webp",
   },
   {
     star: 4,
     count: "thit",
     del: 310000,
     type: "sale",
     title: "Gà organic",

     id: 32,
     price: 230000,
     image: "./assets/images/products/tuoisong/chicken.png",
   },
   {
     star: 4.5,
     count: "thit",
     del: 550000,
     type: "new",
     title: "Thịt bò mỹ",

     id: 33,
     price: 470000,
     image: "./assets/images/products/tuoisong/thit-bo-my.webp",
   },
   {
     star: 3.5,
     count: "thit",
     del: 600000,
     type: "noibat",
     title: "Thịt bò thăn",

     id: 34,
     price: 570000,
     image: "./assets/images/products/tuoisong/thit-bo-than.webp",
   },
   {
     star: 4,
     count: "thit",
     del: 230000,
     type: "new",
     title: "Thịt lợn nạc vai",

     id: 35,
     price: 170000,
     image: "./assets/images/products/tuoisong/thit-lon-lac-vai.webp",
   },
   {
     star: 4,
     count: "thit",
     del: 530000,

     title: "Thịt bò Kobe",
     type: "noibat",
     id: 36,
     price: 520000,
     image: "./assets/images/products/tuoisong/9288725449286883500.webp",
   },
   {
     star: 5,
     count: "raucu",
     del: 1300000,
     type: "noibat",
     title: "Nấm linh chi",

     id: 37,
     price: 990000,
     image:
       "./assets/images/products/raucu/babaucothesudungnamlinhchimotc.webp",
   },
   {
     star: 5,
     count: "hoaqua",
     del: 90000,
     type: "noibat",
     title: "Chôm chôm",

     id: 38,
     price: 70000,
     image: "./assets/images/products/hoaqua/chomchom.webp",
   },
   {
     count: "hoaqua",
     del: 70000,
     star: 5,
     title: "Dứa vàng",
     type: "sale",
     id: 39,
     price: 50000,
     image: "./assets/images/products/hoaqua/imagepineapple5.webp",
   },
   {
     count: "hoaqua",
     del: 300000,
     type: "noibat",
     title: "Chery nhập khẩu",
     star: 5,
     id: 40,
     price: 270000,
     image: "./assets/images/products/hoaqua/congdungcuaquacherry3jpeg.webp",
   },
   {
     count: "hoaqua",
     del: 450000,
     star: 5,
     title: "Chuối Laba nhập Thái lan",
     type: "sale",
     id: 41,
     price: 370000,
     image: "./assets/images/products/hoaqua/227331.webp",
   },
   {
     count: "hoaqua",
     del: 300000,
     star: 3.5,
     title: "Lựu đỏ Nam Phi",
     type: "noibat",
     id: 42,
     price: 170000,
     image: "./assets/images/products/hoaqua/product7600x600.webp",
   },
 ];

 // === TRUY CẬP VÀO CÁC THÀNH PHẦN ===
 let productsEle = document.querySelector(".products");

 let countStar = (star) => {
   let resultStart = "";
   let full;
   let half;
   let nostar;
   if (star % 1 == 0) {
     full = star;
     nostar = 5 - star;
     half = 0;
   } else {
     full = star - 0.5;
     nostar = 5 - star - 0.5;
     half = 1;
   }
   for (let i = 0; i < full; i++) {
     resultStart += `<ion-icon name="star-sharp"></ion-icon>`;
   }
   resultStart += half ? `<ion-icon name="star-half-sharp"></ion-icon>` : "";
   for (let i = 0; i < nostar; i++) {
     resultStart += `<ion-icon name="star-outline"></ion-icon>`;
   }
   return resultStart;
 };

 // === MAIN FUNCTION ===
 // Render và hiển thị dữ liệu
 function renderUI(arr) {
   for (let i = 0; i <arr.length; i++) {
     const p = arr[i];
     productsEle.innerHTML += `
            <div class="product__element product-card filterDiv ${
              p.count
            } data-id="${p.count}"  >
             <input type="hidden" name="" class="product__id" value="${p.id}" />
                <figure class="card-banner">
                 <img class='images'   width="189"
                    height="189"
                    loading="lazy" id="image" src=${p.image}></img>
              

                  <div class="btn-wrapper">
                   

                    <button class="product-btn" aria-label="Quick View" >
                     
                      <a href="./product-details.html" > <ion-icon name="eye-outline"></ion-icon></a>
<div class="tooltip">Xem thêm</div>
                    </button>
                  </div>
                </figure>
<div class="rating-wrapper">
 ${countStar(p.star)}
                 
                </div>
                <h3 id
                  ="${p.id}" class="h4 card-title product__name">
                  <a href="./product-details.html" >${p.title}</a>
                </h3>

                <div class="price-wrapper">
                  <del class="del">${convertMoney(p.del)}</del>

                  <data class="price product__price">${convertMoney(
                    p.price
                  )}</data>
                </div>
  <button class="btn btn-primary btn__add__to__cart">Thêm vào giỏ</button>
              </div>  
        `;
   }
 }

 window.onload = renderUI(products);




/* produce */
// item filter
 
/* 
* Hàm lọc các phần tử trên trang web dựa trên clasname 
 áp dụng cho các phần tử với lớp "filterDiv". Nếu giá trị của "class" là "tất cả", thì tất cả các phần tử
 */
filterSelection("raucu");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}