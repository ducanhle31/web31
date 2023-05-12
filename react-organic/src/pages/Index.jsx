import React from "react";
import "./../components/Layout.css"
import "./Index.css";
import "./../components/Layout.css";
import { NavLink } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useEffect, useState } from "react";
export default function Index() {
    const Products = [
      {
        price: 25000,
        star: 3.5,
        del: 30000,
        type: "new",
        count: "hoaqua",
        id: 1,
        title: "Cam Navel ruột vàng",
        image: "/images/products/hoaqua/cam.webp",
      },
      {
        price: 35000,
        star: 4.5,
        del: 40000,
        type: "new",
        count: "raucu",
        id: 2,
        title: "Khoai tây",
        image: "/images/products/raucu/6.png",
      },
      {
        star: 4.5,
        count: "hoaqua",
        id: 3,
        title: "Chanh tươi",
        price: 15000,
        type: "new",
        del: 25000,
        image: "/images/products/raucu/chanh.webp",
      },
      {
        star: 5,
        count: "hat",
        del: 430000,
        type: "sale",
        title: "Hạt điều trắng",

        id: 4,
        price: 330000,
        image: "/images/products/cacloaihat/hat-dieu.webp",
      },
      {
        count: "hoaqua",
        del: 60000,
        type: "new",
        title: "Đào đỏ mỹ ",
        star: 3.5,
        id: 5,
        price: 55000,
        image: "/images/products/hoaqua/dao.webp",
      },
      {
        star: 4,
        title: "Dâu tây đà lạt",
        count: "hoaqua",
        id: 6,
        price: 200000,

        del: 300000,
        image: "/images/products/hoaqua/dau-tay.webp",
      },
      {
        star: 4,
        title: "Súp lơ xanh",
        count: "raucu",
        id: 7,
        price: 200000,

        del: 300000,
        image: "/images/products/raucu/5.png",
      },
      {
        star: 4,
        count: "hoaqua",
        id: 8,
        type: "noibat",
        del: 280000,

        title: "Dưa lưới nhập khẩu",
        price: 220000,
        image: "/images/products/hoaqua/dua-luoi.webp",
      },

      {
        star: 5,
        count: "hoaqua",
        id: 9,
        type: "new",
        del: 330000,

        title: "Lê xanh Mỹ",
        price: 230000,
        image: "/images/products/hoaqua/le-xanh.webp",
      },
      {
        price: 25000,
        star: 4.5,
        del: 40000,
        type: "new",
        count: "raucu",
        id: 10,
        title: "Tỏi ta",
        image: "/images/products/raucu/garlic_PNG12786.png",
      },
      {
        star: 5,
        count: "hoaqua",
        del: 290000,
        type: "noibat",
        title: "Nho Mỹ nhập khẩu",

        id: 11,
        price: 235000,

        image: "/images/products/hoaqua/nho.webp",
      },
      {
        star: 4,
        count: "hoaqua",
        del: 320000,
        type: "sale",
        title: "Táo xanh Mỹ",

        id: 12,
        price: 240000,

        image: "/images/products/hoaqua/tao.webp",
      },
      /* {
     price: 35000,
     star: 4.5,
     del: 40000,
     type: "new",
     count: "raucu",
     id: 13,
     title: "Gừng",
     image: "/images/products/raucu/ginger_PNG16800.png",
   }, */
      {
        star: 4.5,
        count: "hoaqua",
        del: 200000,
        type: "sale",
        title: "Vải thiều",

        id: 14,
        price: 90000,

        image: "/images/products/hoaqua/vai-thieu.webp",
      },
      {
        star: 5,
        count: "hat",
        del: 400000,
        type: "new",
        title: "Hạt hạnh nhân",

        id: 15,
        price: 320000,
        image: "/images/products/cacloaihat/hanh-nhan.webp",
      },
      {
        star: 5,
        count: "hat",
        del: 300000,

        title: "Hạt điều khô",

        id: 16,
        price: 280000,
        image: "/images/products/cacloaihat/hat-dieu-kho.webp",
      },
      {
        price: 25000,
        star: 4.5,
        del: 30000,

        count: "raucu",
        id: 17,
        title: "Cà chua",
        image: "/images/products/raucu/tomato.png",
      },
      {
        count: "hat",
        del: 490000,
        type: "noibat",
        title: "Quả óc chó",
        star: 5,
        id: 18,
        price: 430000,
        image: "/images/products/cacloaihat/oc-cho.webp",
      },
      {
        star: 3,
        del: 900000,
        count: "haisan",
        title: "Cá hồi",
        type: "sale",
        id: 19,
        price: 720000,
        image: "/images/products/haisan/ca-hoi-ta.webp",
      },
      {
        star: 5,
        count: "hat",
        del: 400000,
        type: "new",
        title: "Ngũ cốc",

        id: 20,
        price: 350000,
        image: "/images/products/cacloaihat/wheat_PNG108.png",
      },
      {
        count: "haisan",
        del: 300000,
        star: 4.5,
        title: "Cua bể",
        type: "new",
        id: 21,
        price: 290000,
        image: "/images/products/haisan/cua-be.webp",
      },
      {
        count: "haisan",
        del: 230000,
        type: "sale",
        title: "Mực Thanh Hóa",
        star: 3.5,
        id: 22,
        price: 130000,
        image: "/images/products/haisan/muc-thanh-hoa.webp",
      },
      {
        star: 5,
        count: "hat",
        del: 200000,
        type: "new",
        title: "Đỗ xanh",

        id: 23,
        price: 150000,
        image: "/images/products/cacloaihat/OIP.jpg",
      },
      {
        count: "haisan",
        del: 530000,
        type: "noibat",
        title: "Tôm biển",
        star: 5,
        id: 24,
        price: 330000,
        image: "/images/products/haisan/tom-bien.webp",
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
          "/images/products/haisan/thumb_350_b-ch-tu-c-t-i-9520524853278.jpg",
      },
      {
        count: "raucu",
        del: 90000,
        type: "new",
        title: "Hành tây",
        star: 4.5,
        id: 26,
        price: 55000,
        image: "/images/products/raucu/hanh-tay.webp",
      },
      {
        count: "raucu",
        del: 30000,

        title: "Rau cải bẹ",
        star: 5,
        id: 27,
        price: 23000,
        image: "/images/products/raucu/rau-cai.webp",
      },
      {
        star: 5,
        count: "raucu",
        del: 50000,
        type: "new",
        title: "Súp lơ trắng",

        id: 28,
        price: 30000,
        image: "/images/products/raucu/sup-lo.webp",
      },
      {
        star: 4.5,
        count: "thit",
        del: 720000,
        type: "sale",
        title: "Ba chỉ bò mỹ",

        id: 29,
        price: 570000,
        image: "/images/products/tuoisong/ba-chi-bo-my.webp",
      },
      {
        star: 4,
        count: "thit",
        del: 310000,
        type: "sale",
        title: "Sườn lợn Brazil",

        id: 30,
        price: 230000,
        image: "/images/products/tuoisong/suon-lon-brazil.webp",
      },
      {
        star: 5,
        count: "thit",
        del: 630000,
        type: "sale",
        title: "Thịt bò Canada",

        id: 31,
        price: 510000,
        image: "/images/products/tuoisong/thit-bo-canada.webp",
      },
      {
        star: 4,
        count: "thit",
        del: 310000,
        type: "sale",
        title: "Gà organic",

        id: 32,
        price: 230000,
        image: "/images/products/tuoisong/chicken.png",
      },
      {
        star: 4.5,
        count: "thit",
        del: 550000,
        type: "new",
        title: "Thịt bò mỹ",

        id: 33,
        price: 470000,
        image: "/images/products/tuoisong/thit-bo-my.webp",
      },
      {
        star: 3.5,
        count: "thit",
        del: 600000,
        type: "noibat",
        title: "Thịt bò thăn",

        id: 34,
        price: 570000,
        image: "/images/products/tuoisong/thit-bo-than.webp",
      },
      {
        star: 4,
        count: "thit",
        del: 230000,
        type: "new",
        title: "Thịt lợn nạc vai",

        id: 35,
        price: 170000,
        image: "/images/products/tuoisong/thit-lon-lac-vai.webp",
      },
      {
        star: 4,
        count: "thit",
        del: 530000,

        title: "Thịt bò Kobe",
        type: "noibat",
        id: 36,
        price: 520000,
        image: "/images/products/tuoisong/9288725449286883500.webp",
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
          "/images/products/raucu/babaucothesudungnamlinhchimotc.webp",
      },
      {
        star: 5,
        count: "hoaqua",
        del: 90000,
        type: "noibat",
        title: "Chôm chôm",

        id: 38,
        price: 70000,
        image: "/images/products/hoaqua/chomchom.webp",
      },
      {
        count: "hoaqua",
        del: 70000,
        star: 5,
        title: "Dứa vàng",
        type: "sale",
        id: 39,
        price: 50000,
        image: "/images/products/hoaqua/imagepineapple5.webp",
      },
      {
        count: "hoaqua",
        del: 300000,
        type: "noibat",
        title: "Chery nhập khẩu",
        star: 5,
        id: 40,
        price: 270000,
        image: "/images/products/hoaqua/congdungcuaquacherry3jpeg.webp",
      },
      {
        count: "hoaqua",
        del: 450000,
        star: 5,
        title: "Chuối Laba nhập Thái lan",
        type: "sale",
        id: 41,
        price: 370000,
        image: "/images/products/hoaqua/227331.webp",
      },
      {
        count: "hoaqua",
        del: 300000,
        star: 3.5,
        title: "Lựu đỏ Nam Phi",
        type: "noibat",
        id: 42,
        price: 170000,
        image: "/images/products/hoaqua/product7600x600.webp",
      },
    ];

     function convertMoney(num) {
       return num.toLocaleString("it-IT", {
         style: "currency",
         currency: "VND",
       });
     }
     const countStar = (star) => {
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
         resultStart += `<IonIcon name="star-sharp"></IonIcon>`;
       }
       resultStart += half
         ? `<IonIcon name="star-half-sharp"></IonIcon>`
         : "";
       for (let i = 0; i < nostar; i++) {
         resultStart += `<IonIcon name="star-outline"></IonIcon>`;
       }
       return resultStart;
     };
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
      setData(Products);
      setCollection([...new Set(Products.map((item) => item.count))]);
    }, []);

    const gallery_filter = (itemData) => {
      const filterData = Products.filter((item) => item.count == itemData);
      setData(filterData);
    };

  return (
    <main>
      <article>
        {/* 
  - #HERO
*/}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p
                className="hero-subtitle"
                style={{ fontFamily: '"Rubik", sans-serif' }}
              >
                Sale 25% tất cả sản phẩm.
              </p>
              <h2 className="h1 hero-title">
                Thực phẩm hữu cơ <span className="span">giàu dinh dưỡng.</span>
              </h2>
              <p className="hero-text">Tốt cho sức khỏe, tốt cho cuộc sống.</p>
              <NavLink to="/shop" className="btn btn-primary">
                <span className="span">Mua ngay</span>
              </NavLink>
            </div>
            <figure className="hero-banner">
              <img
                src="/images/—Pngtree—healthy eating fruit and vegetable_6783161.png"
                width={603}
                height={634}
                loading="lazy"
                alt="Vegetables"
                className="w-100"
              />
            </figure>
          </div>
        </section>
        {/* 
  - #OFFERS
*/}
        <section className="section offers">
          <div className="container">
            <>
              <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  520: {
                    slidesPerView: 1,
                  },
                  950: {
                    slidesPerView: 2,
                  },
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <li className="offers-item">
                    <div className="offers-card">
                      <figure className="card-banner">
                        <img
                          src="/images/offer-1.png"
                          width={292}
                          height={230}
                          loading="lazy"
                          alt="Fresh vegetables package"
                          className="w-100"
                        />
                      </figure>
                      <div className="card-content">
                        <p className="card-subtitle">Giảm tới 25%</p>
                        <h3 className="h3 card-title">
                          Trái cây &amp; rau củ.
                        </h3>
                        <NavLink to="/shop" className="btn btn-primary">
                          Mua ngay
                        </NavLink>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="offers-item">
                    <div className="offers-card">
                      <figure className="card-banner">
                        <img
                          src="/images/products/cacloaihat/wheat_PNG108.png"
                          width={336}
                          height={244}
                          loading="lazy"
                          alt="Healthy & fresh beef"
                          className="w-100"
                        />
                      </figure>
                      <div className="card-content">
                        <p className="card-subtitle">Giảm tới 25%</p>
                        <h3 className="h3 card-title">
                          Ngũ cốc giàu dinh dưỡng
                        </h3>
                        <NavLink to="/shop" className="btn btn-primary">
                          Mua ngay
                        </NavLink>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="offers-item">
                    <div className="offers-card">
                      <figure className="card-banner">
                        <img
                          src="/images/offer-2.png"
                          width={336}
                          height={244}
                          loading="lazy"
                          alt="Healthy & fresh beef"
                          className="w-100"
                        />
                      </figure>
                      <div className="card-content">
                        <p className="card-subtitle">Giảm tới 25%</p>
                        <h3 className="h3 card-title">Thực phẩm tươi sống</h3>
                        <NavLink to="/shop" className="btn btn-primary">
                          Mua ngay
                        </NavLink>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </section>
        {/* 
  - #PRODUCT
*/}
        <section className="section product">
          <div className="container">
            <h2 className="h2 section-title">DANH MỤC SẢN PHẨM</h2>
            <center style={{ marginBottom: 25, marginTop: "-25px" }}>
              <img src="/images/back-ground/bg_title.png" alt="" />
            </center>
            <div className="filter-list " id="myBtnContainer">
              <button
                className="filter-btn filter-text"
                onClick={() => setData(Products)}
              >
                All
              </button>
              {collection.map((item) => (
                <button
                  className="filter-btn filter-text"
                  onClick={() => {
                    gallery_filter(item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className=" grid-list  products ">
              {data.map((item) => (
                
                  <div
                    key={item.id}
                    className="product__element product-card filterDiv "
                  >
                    <input
                      type="hidden"
                      name=""
                      className="product__id"
                      defaultValue={item.id}
                    />
                    <figure className="card-banner">
                      <img
                        className="images"
                        width={189}
                        height={189}
                        loading="lazy"
                        id="image"
                        src={item.image}
                      />

                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <a href="./product-details.html">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </a>
                          <div className="tooltip">Xem thêm</div>
                        </button>
                      </div>
                    </figure>
                    <div className="rating-wrapper">{countStar(item.star)}</div>
                    <h3 className="h4 card-title product__name">
                      <a href="./product-details.html">{item.title}</a>
                    </h3>
                    <div className="price-wrapper">
                      <del className="del">{convertMoney(item.del)}</del>
                      <data className="price product__price">
                        {convertMoney(item.price)}
                      </data>
                    </div>
                    <button className="btn btn-primary btn__add__to__cart">
                      Thêm vào giỏ
                    </button>
                  </div>
               
              ))}
            </div>
          </div>
        </section>
        {/* 
  - #CTA
*/}
        <section className="cta">
          <div className="container">
            <p className="section-subtitle">Ưu đãi mùa hè</p>
            <h2 className="h2 section-title">Giảm đến 50% tất cả sản phẩm.</h2>
            <p className="cta-text">
              THỰC PHẨM LUÔN TƯƠI MỚI, KHÔNG CHẤT ĐỘC HẠI.
            </p>
            <NavLink to="/shop" className="btn btn-primary">
              <span>Mua ngay</span>
            </NavLink>
          </div>
        </section>
        {/* 
  - #TOP PRODUCT
*/}
        <section className="section top-product">
          <div className="container  ">
            <h2 className="h2 section-title">SẢN PHẨM BÁN CHẠY</h2>
            <center style={{ marginBottom: 25, marginTop: "-25px" }}>
              <img src="/images/back-ground/bg_title.png" alt="" />
            </center>
            {/* Swiper */}
            <>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  520: {
                    slidesPerView: 2,
                  },
                  950: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/hoaqua/cam.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Cam Navel </NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">125.000 VND</del>
                        <data className="price" value={85.0}>
                          85.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/hoaqua/le-xanh.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Lê xanh</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">155.000 VND</del>
                        <data className="price" value={85.0}>
                          95.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="product-card top-product-card">
                    <figure className="card-banner">
                      <img
                        src="/images/products/raucu/chanh.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="key Lime"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Chanh tươi</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">100.000 VND</del>
                        <data className="price" value={85.0}>
                          55.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/haisan/ca-hoi.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Cá hồi </NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">325.000 VND</del>
                        <data className="price" value={85.0}>
                          285.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="product-card top-product-card">
                    <figure className="card-banner">
                      <img
                        src="/images/products/raucu/rau-cai.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Watermelon"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Rau cải</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">35.000 VND</del>
                        <data className="price" value={85.0}>
                          20.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/tuoisong/suon-lon-brazil.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Sườn lợn bra-zil</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">225.000 VND</del>
                        <data className="price" value={85.0}>
                          185.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="product-card top-product-card">
                    <figure className="card-banner">
                      <img
                        src="/images/products/cacloaihat/hanh-nhan.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Lens Results Spinach"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Hạnh nhân</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">350.000 VND</del>
                        <data className="price" value={85.0}>
                          290.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/raucu/tomato.png"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Cà chua</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">25.000 VND</del>
                        <data className="price" value={85.0}>
                          15.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="product-card top-product-card">
                    <figure className="card-banner">
                      <img
                        src="/images/products/hoaqua/tao.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Lorigun Artificial"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Táo xanh</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">220.000 VND</del>
                        <data className="price" value={85.0}>
                          185.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/tuoisong/thit-bo-canada.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Thịt bò Canada</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">350.000 VND</del>
                        <data className="price" value={85.0}>
                          250.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="product-card top-product-card">
                    <figure className="card-banner">
                      <img
                        src="/images/products/hoaqua/vai-thieu.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Leaf lettuce"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Vải thiều</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">100.000 VND</del>
                        <data className="price" value={85.0}>
                          75.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/images/products/haisan/cua-be.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <NavLink to="/productdetails">
                            {" "}
                            <IonIcon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <h3 className="h4 card-title">
                        <NavLink to="/productdetails">Cua biển</NavLink>
                      </h3>
                      <div className="price-wrapper">
                        <del className="del">375.000 VND</del>
                        <data className="price" value={85.0}>
                          285.000 VND
                        </data>
                      </div>
                      <button className="btn btn-primary">Thêm vào giỏ</button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </section>
        {/* 
  - #PARTNER
*/}
        <section className="section partner">
          <div className="container">
            <h2 className="h2 section-title">Đối tác của chúng tôi</h2>

            <>
              <Swiper
                loop={true}
                spaceBetween={30}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  520: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  950: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <li className="partner-item">
                    <figure className="partner-logo">
                      <img
                        src="/images/partner-1.png"
                        width={132}
                        height={134}
                        loading="lazy"
                        alt="Partner logo"
                      />
                    </figure>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="partner-item">
                    <figure className="partner-logo">
                      <img
                        src="/images/partner-2.png"
                        width={132}
                        height={134}
                        loading="lazy"
                        alt="Partner logo"
                      />
                    </figure>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className="partner-item">
                    <figure className="partner-logo">
                      <img
                        src="/images/partner-3.png"
                        width={132}
                        height={134}
                        loading="lazy"
                        alt="Partner logo"
                      />
                    </figure>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="partner-item">
                    <figure className="partner-logo">
                      <img
                        src="/images/partner-4.png"
                        width={132}
                        height={134}
                        loading="lazy"
                        alt="Partner logo"
                      />
                    </figure>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="partner-item">
                    <figure className="partner-logo">
                      <img
                        src="/images/partner-5.png"
                        width={132}
                        height={134}
                        loading="lazy"
                        alt="Partner logo"
                      />
                    </figure>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="partner-item">
                    <figure className="partner-logo">
                      <img
                        src="/images/partner-6.png"
                        width={132}
                        height={134}
                        loading="lazy"
                        alt="Partner logo"
                      />
                    </figure>
                  </li>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </section>
        {/* 
  - #TESTIMONIALS
*/}
        <section className="section testimonials">
          <div className="container">
            <h2 className="h2 section-title">NHẬN XÉT CỦA KHÁCH HÀNG</h2>
            <center style={{ marginBottom: 25, marginTop: "-25px" }}>
              <img src="/images/back-ground/bg_title.png" alt="" />
            </center>
            {/* Swiper */}
            <>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  520: {
                    slidesPerView: 2,
                  },
                  950: {
                    slidesPerView: 3,
                  },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="testi-card">
                    <div className="card-header">
                      <img
                        src="/images/quote-left.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                        src="/images/brand/profile1.jpg"
                        width={90}
                        height={90}
                        loading="lazy"
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src="/images/quote-right.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Minh Tâm</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testi-card">
                    <div className="card-header">
                      <img
                        src="/images/quote-left.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                        src="/images/brand/profile2.jpg"
                        width={90}
                        height={90}
                        loading="lazy"
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src="/images/quote-right.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Minh Thúy</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testi-card">
                    <div className="card-header">
                      <img
                        src="/images/quote-left.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                        src="/images/brand/profile3.jpg"
                        width={90}
                        height={90}
                        loading="lazy"
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src="/images/quote-right.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Tâm</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <li className="testi-item">
                    <div className="testi-card">
                      <div className="card-header">
                        <img
                          src="/images/quote-left.png"
                          width={25}
                          height={25}
                          aria-hidden="true"
                          alt=""
                        />
                        <img
                          src="/images/brand/profile4.jpg"
                          width={90}
                          height={90}
                          loading="lazy"
                          alt="Pamelia Hamrick"
                          className="card-avatar"
                        />
                        <img
                          src="/images/quote-right.png"
                          width={25}
                          height={25}
                          aria-hidden="true"
                          alt=""
                        />
                      </div>
                      <div className="rating-wrapper">
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                      </div>
                      <blockquote className="card-text">
                        Nhờ có Organic tôi đã yên tâm chọn lựa những món thực
                        phẩm đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia
                        đình thân yêu.
                      </blockquote>
                      <h3 className="card-title">Minh Tú</h3>
                      <p className="card-subtitle">Designer</p>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testi-card">
                    <div className="card-header">
                      <img
                        src="/images/quote-left.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                        src="/images/brand/profile7.jpg"
                        width={90}
                        height={90}
                        loading="lazy"
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src="/images/quote-right.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Hà Duy</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testi-card">
                    <div className="card-header">
                      <img
                        src="/images/quote-left.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                        src="/images/brand/profile3.jpg"
                        width={90}
                        height={90}
                        loading="lazy"
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src="/images/quote-right.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Tâm</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </section>
        {/* 
  - #BLOG
*/}
        <section className="section blog">
          <div className="container">
            <h2 className="h2 section-title">TIN TỨC MỚI NHẤT</h2>
            <center style={{ marginBottom: 25, marginTop: 25 }}>
              <img src="/images/back-ground/bg_title.png" alt="" />
            </center>
            <div className="blogs">
              <div className="box-container">
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <IonIcon name="calendar-outline"></IonIcon>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <IonIcon name="person-outline"></IonIcon>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Rau xanh tăng giá vì trời mưa</h3>
                    <p>
                      Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa
                      lớn kéo dài liên tiếp nên nguồn ...
                    </p>
                    <NavLink to="/blogdetails" className="btn">
                      Xem thêm
                    </NavLink>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-2.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <IonIcon name="calendar-outline"></IonIcon>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <IonIcon name="person-outline"></IonIcon>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Nhập khẩu rau quả vượt mốc 1 tỷ USD</h3>
                    <p>
                      Theo báo cáo từ Bộ NN&amp;PTNT, giá trị xuất khẩu hàng rau
                      quả tháng 9 năm 2017 ước đạt 294 triệu USD...
                    </p>
                    <NavLink to="/blogdetails" className="btn">
                      Xem thêm
                    </NavLink>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-3.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <IonIcon name="calendar-outline"></IonIcon>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <IonIcon name="person-outline"></IonIcon>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Bí quyết bảo quản nho đen</h3>
                    <p>
                      Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và
                      tốt cho sức khỏe...
                    </p>
                    <NavLink to="/blogdetails" className="btn">
                      Xem thêm
                    </NavLink>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <IonIcon name="calendar-outline"></IonIcon>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <IonIcon name="person-outline"></IonIcon>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Những loại trái cây Nhật đắt như vàng</h3>
                    <p>
                      Nhật Bản là đất nước có nhiều loại hoa quả có chất lượng
                      thuộc hàng ngon nhất thế giới ...
                    </p>
                    <NavLink to="/blogdetails" className="btn">
                      Xem thêm
                    </NavLink>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-5.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <IonIcon name="calendar-outline"></IonIcon>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <IonIcon name="person-outline"></IonIcon>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Công dụng của chanh ngâm mật ong</h3>
                    <p>
                      Chắc bạn đã biết, cả chanh và mật ong đều là những nguyên
                      liệu quý bởi những công năng, tác dụng của chúng...
                    </p>
                    <NavLink to="/blogdetails" className="btn">
                      Xem thêm
                    </NavLink>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-6.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <IonIcon name="calendar-outline"></IonIcon>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <IonIcon name="person-outline"></IonIcon>
                        by admin
                      </NavLink>
                    </div>
                    <h3>4 lý do bạn nên ăn dâu tây</h3>
                    <p>
                      Phòng tránh ung thư, điều chỉnh huyết áp, tăng cường hệ
                      miễn dịch... là những tác dụng bổ ích mà quả dâu tây mang
                      đến cho bạn.
                    </p>
                    <NavLink to="/blogdetails" className="btn">
                      Xem thêm
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
  - #SERVICE
*/}
        <section className="section service">
          <div className="container">
            <ul className="service-list">
              <li className="service-item">
                <div className="item-icon">
                  <img
                    src="/images/service-icon-1.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="Truck icon"
                  />
                </div>
                <h3 className="h3 item-title">Vận chuyển siêu tốc</h3>
              </li>
              <li className="service-item">
                <div className="item-icon">
                  <img
                    src="/images/service-icon-2.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="Payment card icon"
                  />
                </div>
                <h3 className="h3 item-title">Thanh toán an toàn</h3>
              </li>
              <li className="service-item">
                <div className="item-icon">
                  <img
                    src="/images/service-icon-3.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="Helpline icon"
                  />
                </div>
                <h3 className="h3 item-title">Hỗ trợ 24/7</h3>
              </li>
            </ul>
          </div>
        </section>
        {/* 
  - #NEWSLETTER
*/}
        <section className="section newsletter">
          <div className="container">
            <div className="newsletter-card">
              <p className="section-subtitle">-- Theo dõi chúng tôi --</p>
              <h2 className="h2 section-title">
                Đăng kí nhận tin <span className="span">khuyến mãi 20% .</span>
              </h2>
              <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập Email "
                  required=""
                  className="input-email"
                />
                <button type="submit" className="btn btn-primary">
                  <span>Đăng ký</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <div id="snackbarr">Sản phẩm đã có trong giỏ hàng</div>
      </article>
    </main>
  );
}
