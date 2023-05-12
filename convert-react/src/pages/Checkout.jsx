import React from 'react'

export default function Checkout() {
  return (
    <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Thanh toán</h1>
          <p>
            <a href="./index.html">Trang chủ &gt;&gt;</a>Thanh toán
          </p>
        </div>
        {/* 
  - #PRODUCT
*/}
        <section className="section products" hidden="">
          <div className="container col-container">
            <div className="container-right">
              <div className="grid-list list-product products" id="root" />
              <div className="pagination" />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-60">
              <div className="checkout">
                <div className="user_info">
                  <h6>Thông Tin Khách hàng</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Họ và tên"
                    />
                    <div className="form-message name" />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Số điện thoại"
                    />
                    <div className="form-message phone" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <div className="form-message email" />
                  </div>
                  <div className="adress_customer">
                    <select id="city" name="city">
                      <option value="default">Chọn tỉnh</option>
                    </select>
                    <select id="districts" name="districts">
                      <option value="default">Chọn huyện</option>
                    </select>
                    <select name="wards" id="wards">
                      <option value="default">Chọn xã</option>
                    </select>
                  </div>
                  <textarea rows={3} placeholder="Ghi chú" defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="col-40">
              <div className="checkout">
                <div
                  className="checkout__pay"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <div className="h2 pay__heading">Đơn hàng của tôi</div>
                  <div className="pay__calc pay__calc--active">
                    <p className="pay__title">Thành Tiền</p>
                    <div className="pay__item">
                      <p>Khoai tây</p>
                      <div className="product-qty">
                        <button id="decrement">
                          <ion-icon name="remove-outline" />
                        </button>
                        <span id="quantity">1</span>
                        <button id="increment">
                          <ion-icon name="add-outline" />
                        </button>
                      </div>
                      <div className="price">
                        <span id="price">25.000 </span> VND
                      </div>
                    </div>
                    <div className="pay__item">
                      <p>Sườn lợn</p>
                      <div className="product-qty">
                        <button id="decrement">
                          <ion-icon name="remove-outline" />
                        </button>
                        <span id="quantity">1</span>
                        <button id="increment">
                          <ion-icon name="add-outline" />
                        </button>
                      </div>
                      <div className="price">
                        <span id="price">250.000</span>VND
                      </div>
                    </div>
                    <div className="pay__item">
                      <p>Thịt bò Mỹ</p>
                      <div className="product-qty">
                        <button id="decrement">
                          <ion-icon name="remove-outline" />
                        </button>
                        <span id="quantity">1</span>
                        <button id="increment">
                          <ion-icon name="add-outline" />
                        </button>
                      </div>
                      <div className="price">
                        <span id="price">450.000</span>VND
                      </div>
                    </div>
                    <div className="pay__total">
                      <div className="total">
                        <p>Tổng tiền :</p>
                        <span>
                          {" "}
                          <span id="total">725.000</span>VND
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pay__method pay__method--active">
                    <p className="pay__title">Phương Thức Thanh Toán</p>
                    <div className="pay__radio">
                      <div className="pay__group">
                        <input
                          type="radio"
                          id="vimomo"
                          name="get"
                          defaultValue="vimomo"
                        />
                        <label htmlFor="vimomo">Ví Momo</label>
                      </div>
                      <div className="pay__group">
                        <input
                          type="radio"
                          id="banking"
                          name="get"
                          defaultValue="banking"
                        />
                        <label htmlFor="banking">Thanh toán bằng ATM</label>
                      </div>
                      <div className="pay__group">
                        <input
                          type="radio"
                          id="get"
                          name="get"
                          defaultValue="nhanhang"
                        />
                        <label htmlFor="get">Thanh toán khi nhận hàng</label>
                      </div>
                    </div>
                  </div>
                  <button className="pay__paynow check_out_btn">
                    Thanh toán
                  </button>
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
        {/* 
<div id="snackbar">Đơn hàng đã được thanh toán </div> */}
      </article>
    </main>
  );
}
