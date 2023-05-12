import React from 'react'

export default function Home() {
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
              <a href="./shop.html" className="btn btn-primary">
                <span className="span">Mua ngay</span>
              </a>
            </div>
            <figure className="hero-banner">
              <img
                src="/—Pngtree—healthy eating fruit and vegetable_6783161.pn"
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
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <li className="offers-item">
                    <div className="offers-card">
                      <figure className="card-banner">
                        <img
                          src="/offer-1.png"
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
                        <a href="./shop.html" className="btn btn-primary">
                          Mua ngay
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
                <div className="swiper-slide">
                  <li className="offers-item">
                    <div className="offers-card">
                      <figure className="card-banner">
                        <img
                          src="/wheat_PNG108.png"
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
                        <a href="./shop.html" className="btn btn-primary">
                          Mua ngay
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
                <div className="swiper-slide">
                  <li className="offers-item">
                    <div className="offers-card">
                      <figure className="card-banner">
                        <img
                          src="/offer-2.png"
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
                        <a href="./shop.html" className="btn btn-primary">
                          Mua ngay
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </section>
        {/* 
  - #PRODUCT
*/}
        <section className="section product">
          <div className="container">
            <h2 className="h2 section-title">DANH MỤC SẢN PHẨM</h2>
            <center style={{ marginBottom: 25, marginTop: "-25px" }}>
              <img src="bg_title.png" alt="" />
            </center>
            <div className="filter-list " id="myBtnContainer">
              <button
                className="  filter-btn active filter-text"
                onclick="filterSelection('raucu')"
              >
                Rau củ
              </button>
              <button
                className="filter-btn filter-text"
                onclick="filterSelection('hoaqua')"
              >
                Hoa quả
              </button>
              <button
                className="filter-btn  filter-text"
                onclick="filterSelection('hat')"
              >
                Các loại hạt
              </button>
              <button
                className="filter-btn filter-text"
                onclick="filterSelection('haisan')"
              >
                Hải sản
              </button>
              <button
                className="filter-btn filter-text"
                onclick="filterSelection('thit')"
              >
                Thực phẩm tươi sống
              </button>
            </div>
            <div className=" grid-list  products "></div>
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
            <a href="./shop.html" className="btn btn-primary">
              <span>Mua ngay</span>
            </a>
          </div>
        </section>
        {/* 
  - #TOP PRODUCT
*/}
        <section className="section top-product">
          <div className="container  ">
            <h2 className="h2 section-title">SẢN PHẨM BÁN CHẠY</h2>
            <center style={{ marginBottom: 25, marginTop: "-25px" }}>
              <img src="/bg_title.png" alt="" />
            </center>
            {/* Swiper */}
            <div className="swiper my-Swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-card top-product-card">
                    <input
                      type="hidden"
                      id="product__id"
                      defaultValue="${product.id}"
                    />
                    <figure className="card-banner">
                      <img
                        src="/cam.webp"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Fresh Orangey"
                      />
                      <div className="btn-wrapper">
                        <button className="product-btn" aria-label="Quick View">
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Cam Navel </a>
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Lê xanh</a>
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
                </div>
                <div className="swiper-slide">
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Chanh tươi</a>
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Cá hồi </a>
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
                </div>
                <div className="swiper-slide">
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Rau cải</a>
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Sườn lợn bra-zil</a>
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
                </div>
                <div className="swiper-slide">
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Hạnh nhân</a>
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Cà chua</a>
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
                </div>
                <div className="swiper-slide">
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Táo xanh</a>
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Thịt bò Canada</a>
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
                </div>
                <div className="swiper-slide">
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Vải thiều</a>
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
                          <a href="./product-details.html">
                            {" "}
                            <ion-icon name="eye-outline" />
                          </a>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="rating-wrapper">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <h3 className="h4 card-title">
                        <a href="./product-details.html">Cua biển</a>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
  - #PARTNER
*/}
        <section className="section partner">
          <div className="container">
            <h2 className="h2 section-title">Đối tác của chúng tôi</h2>
            <div className="swiper parter-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
                </div>
                <div className="swiper-slide">
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
                </div>
                <div className="swiper-slide">
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
                </div>
                <div className="swiper-slide">
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
                </div>
                <div className="swiper-slide">
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
                </div>
                <div className="swiper-slide">
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
                </div>
              </div>
            </div>
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
            <div className="swiper TESTIMONIALS-Swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Minh Tâm</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </div>
                <div className="swiper-slide">
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
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Minh Thúy</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </div>
                <div className="swiper-slide">
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
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Tâm</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </div>
                <div className="swiper-slide">
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
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
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
                </div>
                <div className="swiper-slide">
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
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Hà Duy</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </div>
                <div className="swiper-slide">
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
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Tâm</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
            </div>
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
                      <a href="#">
                        <ion-icon name="calendar-outline" /> 21st may, 2021
                      </a>
                      <a href="#">
                        <ion-icon name="person-sharp" /> by admin
                      </a>
                    </div>
                    <h3>Rau xanh tăng giá vì trời mưa</h3>
                    <p>
                      Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa
                      lớn kéo dài liên tiếp nên nguồn ...
                    </p>
                    <a href="./blogdetails.html" className="btn">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-2.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#">
                        <ion-icon name="calendar-outline" /> 21st may, 2021
                      </a>
                      <a href="#">
                        <ion-icon name="person-sharp" /> by admin
                      </a>
                    </div>
                    <h3>Nhập khẩu rau quả vượt mốc 1 tỷ USD</h3>
                    <p>
                      Theo báo cáo từ Bộ NN&amp;PTNT, giá trị xuất khẩu hàng rau
                      quả tháng 9 năm 2017 ước đạt 294 triệu USD...
                    </p>
                    <a href="./blogdetails.html" className="btn">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-3.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#">
                        <ion-icon name="calendar-outline" /> 21st may, 2021
                      </a>
                      <a href="#">
                        <ion-icon name="person-sharp" /> by admin
                      </a>
                    </div>
                    <h3>Bí quyết bảo quản nho đen</h3>
                    <p>
                      Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và
                      tốt cho sức khỏe...
                    </p>
                    <a href="./blogdetails.html" className="btn">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#">
                        <ion-icon name="calendar-outline" /> 21st may, 2021
                      </a>
                      <a href="#">
                        <ion-icon name="person-sharp" /> by admin
                      </a>
                    </div>
                    <h3>Những loại trái cây Nhật đắt như vàng</h3>
                    <p>
                      Nhật Bản là đất nước có nhiều loại hoa quả có chất lượng
                      thuộc hàng ngon nhất thế giới ...
                    </p>
                    <a href="./blogdetails.html" className="btn">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-5.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#">
                        <ion-icon name="calendar-outline" /> 21st may, 2021
                      </a>
                      <a href="#">
                        <ion-icon name="person-sharp" /> by admin
                      </a>
                    </div>
                    <h3>Công dụng của chanh ngâm mật ong</h3>
                    <p>
                      Chắc bạn đã biết, cả chanh và mật ong đều là những nguyên
                      liệu quý bởi những công năng, tác dụng của chúng...
                    </p>
                    <a href="./blogdetails.html" className="btn">
                      Xem thêm
                    </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-6.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="">
                        <ion-icon name="calendar-outline" /> 21st may, 2021
                      </a>
                      <a href="">
                        <ion-icon name="person-sharp" /> by admin
                      </a>
                    </div>
                    <h3>4 lý do bạn nên ăn dâu tây</h3>
                    <p>
                      Phòng tránh ung thư, điều chỉnh huyết áp, tăng cường hệ
                      miễn dịch... là những tác dụng bổ ích mà quả dâu tây mang
                      đến cho bạn.
                    </p>
                    <a href="./blogdetails.html" className="btn">
                      Xem thêm
                    </a>
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
        <a className="totop" href="#">
          <ion-icon name="arrow-up-outline" />
        </a>
        <div id="snackbarr">Sản phẩm đã có trong giỏ hàng</div>
      </article>
    </main>
  );
}
