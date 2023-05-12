import React from 'react';
import { NavLink } from "react-router-dom";
import "./footer .css";
import"./home.css";
export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <NavLink as={NavLink} to="/" class="logo">
              Orga<span class="span">nic</span>
            </NavLink>

            <p class="footer-text">
              Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ từ
              khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi đến
              giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất, sạch
              nhất cho thị trường.
            </p>

            <ul class="social-list">
              <li>
                <NavLink to="/" class="social-link">
                  <img
                    src="/images/btn/user-1.svg"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </NavLink>
              </li>

              <li>
                <NavLink as={NavLink} to="/" class="social-link">
                  <img
                    src="/images/btn/user-2.svg"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </NavLink>
              </li>

              <li>
                <a href="#" class="social-link">
                  <img
                    src="/images/btn/user-3.svg"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Liên kết</p>
            </li>

            <li>
              <NavLink to="/about" class="footer-link">
                Giới thiệu
              </NavLink>
            </li>

            <li>
              <a href="./shop.html" class="footer-link">
                Sản phẩm
              </a>
             
            </li>

            <li>
              <a href="./blog.html" class="footer-link">
                Tin tức
              </a>
            </li>

            <li>
              <a href="./contact.html" class="footer-link">
                Liên hệ
              </a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Liên hệ</p>
            </li>

            <li class="footer-item">
              <div class="contact-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <address class="contact-link">
                Thụy Phương, Bắc TỪ Liêm, HN.
              </address>
            </li>

            <li class="footer-item">
              <div class="contact-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a href="tel:+1800123456789" class="contact-link">
                034 444 9999
              </a>
            </li>

            <li class="footer-item">
              <div class="contact-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="mailto:organica@help.com" class="contact-link">
                organic.com
              </a>
            </li>
          </ul>

          <div class="footer-list">
            <p class="footer-list-title">Bản tin</p>

            <p class="newsletter-text">
              Bạn sẽ nhận được thông báo khi có tin mới.
            </p>

            <form action="" class="footer-form">
              <input
                type="email"
                name="email"
                placeholder="Địa chỉ Email *"
                required
                class="footer-input"
              />

              <button type="submit" class="footer-form-btn" aria-label="Submit">
                <ion-icon name="mail-outline"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2023{" "}
            <a href="#" class="copyright-link">
              organic
            </a>
          </p>

          <ul class="footer-bottom-list">
            <li>
              <a href="#" class="footer-bottom-link">
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
