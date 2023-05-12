import React from 'react'
import { NavLink } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <NavLink to="/" className="logo">
              Orga<span className="span">nic</span>
            </NavLink>
            <p className="footer-text">
              Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ từ
              khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi đến
              giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất, sạch
              nhất cho thị trường.
            </p>
            <ul className="social-list">
              <li>
                <NavLink href="/" className="social-link">
                  <img
                    src="/images/btn/user-1.svg"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="social-link">
                  <img
                    src="/images/btn/user-2.svg"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="social-link">
                  <img
                    src="/images/btn/user-3.svg"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Liên kết</p>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="footer-link">
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="footer-link">
                Tin tức
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Liên hệ</p>
            </li>
            <li className="footer-item">
              <div className="contact-icon">
                <IonIcon name="location-outline" />
              </div>
              <address className="contact-link">
                Thụy Phương, Bắc TỪ Liêm, HN.
              </address>
            </li>
            <li className="footer-item">
              <div className="contact-icon">
                <IonIcon name="call-outline" />
              </div>
              <NavLink to="/" className="contact-link">
                034 444 9999
              </NavLink>
            </li>
            <li className="footer-item">
              <div className="contact-icon">
                <IonIcon name="mail-outline" />
              </div>
              <NavLink to="/" className="contact-link">
                organic.com
              </NavLink>
            </li>
          </ul>
          <div className="footer-list">
            <p className="footer-list-title">Bản tin</p>
            <p className="newsletter-text">
              Bạn sẽ nhận được thông báo khi có tin mới.
            </p>
            <form action="" className="footer-form">
              <input
                type="email"
                name="email"
                placeholder="Địa chỉ Email *"
                required=""
                className="footer-input"
              />
              <button
                type="submit"
                className="footer-form-btn"
                aria-label="Submit"
              >
                <IonIcon name="mail-outline" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2023{" "}
            <NavLink to="/" className="copyright-link">
              organic
            </NavLink>
          </p>
          <ul className="footer-bottom-list">
            <li>
              <NavLink to="/" className="footer-bottom-link">
                Chính sách bảo mật
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
