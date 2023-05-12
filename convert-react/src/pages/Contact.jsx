import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Liên hệ</h1>
          <p>
            <a href="./index.html">Trang chủ &gt;&gt;</a> Liên hệ
          </p>
        </div>
        {/* contact */}
        <section className="container">
          <div className="contact">
            <div className="icons-container">
              <div className="icons">
                <i className="fas fa-phone" />
                <h3>Điện thoại</h3>
                <p>034.444.9999</p>
              </div>
              <div className="icons">
                <i className="fas fa-envelope" />
                <h3>Email</h3>
                <p>organic.com</p>
              </div>
              <div className="icons">
                <i className="fas fa-map-marker-alt" />
                <h3>Địa chỉ</h3>
                <p>Thụy Phương, Bắc Từ Liêm, Hà Nội</p>
              </div>
            </div>
            <div className="row">
              <form action="">
                <h3>Liên hệ với chúng tôi</h3>
                <div className="inputBox">
                  <input type="text" placeholder="Họ và tên" className="box" />
                  <input type="email" placeholder="Email" className="box" />
                </div>
                <div className="inputBox">
                  <input
                    type="number"
                    placeholder="Số điện thoại "
                    className="box"
                  />
                  <input type="text" placeholder="Chủ đề " className="box" />
                </div>
                <textarea
                  placeholder="Lời nhắn"
                  cols={30}
                  rows={10}
                  defaultValue={""}
                />
                <input type="submit" defaultValue="Gửi tin" className="btn" />
              </form>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6489708125914!2d105.77425111053716!3d21.08667788049617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134554a2d998dd5%3A0x2ee9ee775277367f!2zNDUgxJAuVGjhu6V5IFBoxrDGoW5nLCDEkMO0bmcgTmfhuqFjLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678900914283!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
              />
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
