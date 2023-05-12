import React from 'react'
import "./Contact.css"
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">Trang chủ &gt;&gt;</NavLink> Liên hệ
          </p>
        </div>
        {/* contact */}
        <section className="container">
          <div className="contact">
            <div className="icons-container">
              <div className="icons">
                {" "}
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <h3>Điện thoại</h3>
                <p>034.444.9999</p>
              </div>
              <div className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                <h3>Email</h3>
                <p>organic.com</p>
              </div>
              <div className="icons">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
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
      </article>
    </main>
  );
}
