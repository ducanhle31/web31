
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Header() {
  return (
    <div>
      
        <header className="header" data-header="">
          <div className="nav-wrapper">
            <div className="container">
              <h1 className="h1">
                <a href="./index.html" className="logo">
                  Orga<span className="span">nic</span>
                </a>
              </h1>
              <button
                className="nav-open-btn"
                aria-label="Open Menu"
                data-nav-open-btn=""
              >
                <ion-icon name="menu-outline" />
              </button>
              <nav className="navbar" data-navbar="">
                <button
                  className="nav-close-btn"
                  aria-label="Close Menu"
                  data-nav-close-btn=""
                >
                  <ion-icon name="close-outline" />
                </button>
                <ul className="navbar-list">
                  <li>
                    <a href="./index.html" className="navbar-link active ">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="./shop.html" className="navbar-link ">
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="./about.html" className="navbar-link ">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="./blog.html" className="navbar-link ">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="./contact.html" className="navbar-link ">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header-action">
                <div className="search-wrapper" data-search-wrapper="">
                  <button
                    className="header-action-btn"
                    aria-label="Toggle search"
                    data-search-btn=""
                  >
                    <ion-icon name="search-outline" className="search-icon" />
                    <ion-icon name="close-outline" className="close-icon" />
                  </button>
                  <div className="input-wrapper">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search here"
                      className="search-input"
                    />
                    <button
                      className="search-submit"
                      aria-label="Submit search"
                    >
                      <ion-icon name="search-outline" />
                    </button>
                  </div>
                </div>
                <label htmlFor="show1" className="show-btn1 header-action-btn">
                  <ion-icon name="person-outline" />
                </label>
                <div className="cart_items">
                  <button
                    className="header-action-btn cart__counter"
                    aria-label="Open shopping cart"
                    data-panel-btn="cart"
                  >
                    <ion-icon id="cart" name="basket-outline" />
                    <span
                      className="btn-badge cart-quantity"
                      id="total__counter"
                    >
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* 
    - #ASIDE
  */}
        <aside className="aside">
          <div className="center1">
            <input type="checkbox" id="show1" />
            <div className="container1">
              <label htmlFor="show1" className="close-btn1" title="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </label>
              <div className="text1">Đăng nhập</div>
              <form action="#">
                <div className="data1">
                  <input type="text" placeholder="Nhập Email" required="" />
                </div>
                <div className="data1">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    required=""
                  />
                </div>
                <div className="forgot-pass1">
                  <a href="#">Quên mật khẩu?</a>
                </div>
                <div className="btn1">
                  <div className="inner1" />
                  <button type="submit1">Đăng nhập</button>
                </div>
                <div className="signup-link1">
                  Bạn không phải là một thành viên? <a href="#">Đăng ký</a>
                </div>
              </form>
            </div>
          </div>
          <div className="side-panel cart" data-side-panel="cart">
            <button
              className="panel-close-btn"
              aria-label="Close cart"
              data-panel-btn="cart"
            >
              <ion-icon name="close-outline" />
            </button>
            <ul className="panel-list cart__items"></ul>
            <div className="subtotal">
              <p className="subtotal-text">Tổng cộng:</p>
              <data className="subtotal-value total__cost">0 VND</data>
            </div>
            <a href="" className="check_out_btn" />
            <a href="./cart.html" className="panel-btn ">
              Thanh toán
            </a>
          </div>
        </aside>
      
    </div>
  );
}
