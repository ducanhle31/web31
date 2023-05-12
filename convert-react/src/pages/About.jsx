import React from 'react'
import "./About.css"
export default function About() {
  return (
    <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Giới thiệu</h1>
          <p>
            {" "}
            <a href="./index.html">Trang chủ &gt;&gt;</a>Giới thiệu
          </p>
        </div>
        {/*  */}
        <section className="container">
          <div className="about">
            <div className="content">
              <h3>Thực phẩm hữu cơ giàu dinh dưỡng.</h3>
              <p>
                Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ
                từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi
                đến giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất,
                sạch nhất cho thị trường.
              </p>
              <p>
                Các sản phẩm rau hữu cơ của Michimart cung cấp đều nằm trong dự
                án ADDA được tổ chức Hệ thống bảo đảm cùng tham gia– PGS
                (Participatory Guarantee System) chứng nhận, đảm bảo tính hữu
                cơ.
              </p>
              <p>
                Thực phẩm sạch, trái cây an toàn đều có giấy chứng nhận an toàn
                VIETGAP, GLOBAL GAP, HACCP, có xuất xứ rõ ràng, không những sạch
                – mà còn ngon.
              </p>
            </div>
            <div className="image">
              <img src="./assets/images/about-img.jpg" alt="" />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="container">
          <div className="gallery">
            <div className="box-container">
              <div className="box">
                <img src="./assets/images/slide/gallery-img-1.jpg" alt="" />
              </div>
              <div className="box">
                <img src="./assets/images/slide/gallery-img-2.jpg" alt="" />
              </div>
              <div className="box">
                <img src="./assets/images/slide/gallery-img-4.jpg" alt="" />
              </div>
              <div className="box">
                <img src="./assets/images/slide/gallery-img-3.jpg" alt="" />
              </div>
              <div className="box">
                <img src="./assets/images/slide/gallery-img-5.jpg" alt="" />
              </div>
              <div className="box">
                <img src="./assets/images/slide/gallery-img-6.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/*  */}
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
                        src="./assets/images/partner-1.png"
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
                        src="./assets/images/partner-2.png"
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
                        src="./assets/images/partner-3.png"
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
                        src="./assets/images/partner-4.png"
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
                        src="./assets/images/partner-5.png"
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
                        src="./assets/images/partner-6.png"
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
      </article>
    </main>
  );
}
