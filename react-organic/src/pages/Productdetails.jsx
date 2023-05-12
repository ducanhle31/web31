import React from 'react'
import "./Productdetails.css"
import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Productdetails() {
  return (
    <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Chanh tươi</h1>
          <p>
            <NavLink to="/">Trang chủ &gt;&gt;</NavLink> Chanh tươi
          </p>
        </div>
        {/* 
  - #PRODUCT DETAILS
*/}
        <section className="section product-details">
          <div className="container">
            <div className="wrapper">
              <div className="product-details-img">
                <figure className="product-display">
                  <img
                    src="/images/10.webp"
                    width={700}
                    height={700}
                    loading="lazy"
                    alt="Non-starchy vegetables."
                    className="w-100"
                    data-product-display=""
                  />
                </figure>
                <ul className="product-thumbnail-list has-scrollbar">
                  <li className="product-thumbnail-item">
                    <img
                      src="/images/10.webp"
                      width={700}
                      height={700}
                      loading="lazy"
                      alt="Non-starchy vegetables."
                      className="w-100"
                      data-product-thumbnail=""
                    />
                  </li>
                  <li className="product-thumbnail-item">
                    <img
                      src="/images/11.webp"
                      width={700}
                      height={700}
                      loading="lazy"
                      alt="Non-starchy vegetables."
                      className="w-100"
                      data-product-thumbnail=""
                    />
                  </li>
                </ul>
              </div>
              <div className="product-details-content">
                <h3 className="product-title">Chanh tươi</h3>
                <div className="price-wrapper">
                  <data
                    className="price product-price"
                    style={{ color: "#ff0000" }}
                    value={25.0}
                  >
                    25.000đ
                  </data>
                  <del className="del"> 35.000đ</del>
                </div>
                <p>&nbsp;</p>
                <p>Nguồn gốc: Việt Nam</p>
                <p>&nbsp;</p>
                <p className="product-text">
                  Các chuyên gia dinh dưỡng khuyên rằng mỗi ngày bạn hãy uống 1
                  ly nước chanh tươi ấm pha với mật ong để không ngừng nâng cao
                  sức đề kháng, tăng cường hệ thống miễn dịch và bảo vệ sức
                  khỏe.
                </p>
                <div className="product-weight-wrapper">
                  <p className="product-weight-title">Khối lượng :</p>
                  <ul className="product-weight-list">
                    <li className="product-weight-item">
                      <input
                        type="radio"
                        name="weight"
                        id="weight-1"
                        className="product-weight-radio"
                      />
                      <label
                        htmlFor="weight-1"
                        className="product-weight-label"
                      >
                        0.5kg
                      </label>
                    </li>
                    <li className="product-weight-item">
                      <input
                        type="radio"
                        name="weight"
                        id="weight-2"
                        className="product-weight-radio"
                      />
                      <label
                        htmlFor="weight-2"
                        className="product-weight-label"
                      >
                        1kg
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="product-qty">
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={1}
                    min={1}
                    max={50}
                    className="product-qty-input"
                  />
                  <button className="btn btn-primary product-qty-btn">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
            <h4 className="description-title">Mô tả :</h4>
            <p className="description-text">
              Với tính năng đa tác dụng và hiệu quả vượt trội trong cuộc sống
              hàng ngày, chanh tươi từ lâu đã trở thành thực phẩm quen thuộc
              trong tủ lạnh nhiều gia đình. Bên cạnh khả năng góp phần giúp chị
              em làm đẹp, phát huy công dụng trong nhà bếp, vệ sinh nhà cửa,
              chanh tươi còn có rất nhiều lợi ích đối với sức khỏe mà không phải
              ai cũng biết.
            </p>
            <p className="description-text">
              Các chuyên gia dinh dưỡng khuyên rằng mỗi ngày bạn hãy uống 1 ly
              nước chanh tươi ấm pha với mật ong để không ngừng nâng cao sức đề
              kháng, tăng cường hệ thống miễn dịch và bảo vệ sức khỏe vì trong
              chanh tươi có chứa rất nhiều kali giúp kích thích hoạt động bộ
              não, đảm bảo hoạt động của hệ thần kinh, huyết áp ổn định, tăng
              cường chức năng tiêu hóa, phát huy khả năng thanh lọc cơ thể của
              thận đẻ bài trừ độc tố, không những thế nguồn vitamin C dồi dào
              trong chanh tươi còn là thành phần không thế thiếu giúp bạn nâng
              cao sức đề kháng mỗi ngày nữa đấy.
            </p>
          </div>
        </section>
        <section className="section top-product">
          <div className="container">
            <h2 className="h2 section-title">SẢN PHẨM LIÊN QUAN</h2>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
                            <ion-icon name="eye-outline" />
                          </NavLink>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
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
       
      </article>
    </main>
  );
}
