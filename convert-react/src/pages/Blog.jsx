import React from 'react'

export default function Blog() {
  return (
    <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Tin tức</h1>
          <p>
            <a href="./index.html">Trang chủ &gt;&gt;</a>Tin tức
          </p>
        </div>
        {/* blog */}
        <section className="section blog">
          <div className="container">
            <h2 className="titles">Bài viết</h2>
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
                      lớn kéo dài liên tiếp nên nguồn cung rau xanh...
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
