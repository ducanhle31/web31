import React from 'react'
import "./Shop.css"

import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Shop() {
  return (
    <main id="top">
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Sản phẩm</h1>
          <p>
            <NavLink to="/index">Trang chủ &gt;&gt;</NavLink>Sản phẩm
          </p>
        </div>
        {/* 
  - #PRODUCT
*/}
        <section className="section product">
          <div className="container col-container">
            <div className="filters-left">
              <div className="filters-left-top">
                <h4 style={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-funnel-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                  </svg>
                  &nbsp; Bộ lọc
                </h4>
                <button id="reset-checkboxes-button">Bỏ lọc</button>
              </div>
              <div className="filters">
                <h4>Danh mục</h4>
                <label className="containerr">
                  Rau củ
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="raucu"
                  />
                  <span className="checkmark" />
                </label>
                <label className="containerr">
                  Hoa quả
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="hoaqua"
                  />
                  <span className="checkmark" />
                </label>
                <label className="containerr">
                  Các loại hạt
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="hat"
                  />
                  <span className="checkmark" />
                </label>
                <label className="containerr">
                  Hải sản
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="haisan"
                  />
                  <span className="checkmark" />
                </label>
                <label className="containerr">
                  Thực phẩm tươi sống
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="thit"
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="filters">
                <h4>Trạng thái</h4>
                <label className="containerr">
                  Mới về
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="new"
                  />
                  <span className="checkmark" />
                </label>
                <label className="containerr">
                  Nổi bật
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="noibat"
                  />
                  <span className="checkmark" />
                </label>
                <label className="containerr">
                  Đang giảm giá
                  <input
                    type="checkbox"
                    name="categoryFilter"
                    className="filter-checkbox"
                    defaultValue="sale"
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="container-right">
              <div className="price_sort">
                <label htmlFor="price">Sắp xếp:</label>
                <select name="price" id="price">
                  <option value="default">Mặc định</option>
                  <option value="increase">Giá tăng dần</option>
                  <option value="decrease">Giá giảm dần</option>
                  <option value="starup">Xếp hạng cao</option>
                  <option value="stardown">Xếp hạng thấp</option>
                </select>
              </div>
              <div className="grid-list list-product products" id="root">
                {/*  <div class="product-card" >
          <figure class="card-banner">
            <img
              src="./assets/images/products/hoaqua/cam.webp"
              width="189"
              height="189"
              loading="lazy"
              alt="Fresh Orangey"
            />

            <div class="btn-wrapper">
              <button class="product-btn" aria-label="Quick View" >
               
                <a href="./product-details.html" > <ion-icon name="eye-outline"></ion-icon></a>

              </button>
            </div>
          </figure>

        
          

          <h3 class="h4 card-title">
            <a href="./product-details.html">Cam Navel ruột vàng</a>
          </h3>

          <div class="price-wrapper">
            <del class="del">$95.00</del>

            <data class="price" value="85.00">$85.00</data>
          </div>

          <button class="btn btn-primary">Thêm vào giỏ</button>
        </div>  */}
              </div>
              <div className="pagination" />
            </div>
          </div>
        </section>
        {/*  */}

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
