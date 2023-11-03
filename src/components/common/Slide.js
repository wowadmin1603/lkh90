import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slide">
      <div>
        <div className="slide-item">
          <div className="self-center md:w-[330px] md:h-[460px] w-[260px] h-[370px]">
            <img
              src="/images/coach-1.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="top">
              <span>Ông</span>
              <h4>
                <span>Collins</span> Hoàng Anh Chiến
              </h4>
              <span>CHT Firm's Owner</span>
            </div>
            <div className="bottom">
              <div className="block">
                <img srcSet="/icons/coach-icon1.png 2x" alt="" />
                <div>
                  <h5>HỌC VỊ:</h5>
                  <p>Kỹ sư xây dựng – Đại học xây dựng Hà Nội.</p>
                </div>
              </div>
              <div className="block">
                <img srcSet="/icons/coach-icon2.png 2x" alt="" />
                <div>
                  <h5>KINH NGHIỆM:</h5>
                  <p>- 1 năm là Nhà Huấn luyện doanh nghiệp tại ActionCOACH.</p>
                  <p>
                    - Hơn 16 năm làm trong lĩnh vực xây dựng và thương mại, và
                    hơn 10 năm xây dựng và vận hành 03 doanh nghiệp xây dựng
                    thương mại.
                  </p>
                  <p>
                    - Là một chuyên gia về lĩnh vực Quản lý dự án hạng 1, Giám
                    sát và Thiết kế hạng 1 các công trình dân dụng và công
                    nghiệp.
                  </p>
                  <p>
                    - Giám đốc cấp cao của BNI sau 24 tháng tham gia vào cộng
                    đồng BNI. Trong 12 tháng là giám đốc phát triển của 3
                    chapter BNI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-item">
          <div className="self-center md:w-[330px] md:h-[460px] w-[260px] h-[370px]">
            <img
              src="/images/coach-2.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="top">
              <span>Ông</span>
              <h4>
                <span>Jack</span> Du Quốc Tiên
              </h4>
              <span>Giám đốc Học viện Đào tạo COACH Việt Nam</span>
            </div>
            <div className="bottom">
              <div className="block">
                <img srcSet="/icons/coach-icon3.png 2x" alt="" />
                <div>
                  <h5>VAI TRÒ TẠI ACTIONCOACH:</h5>
                  <p>
                    Vai trò tại ActionCOACH: National Trainer của Khu vực Đông
                    Nam Á.
                  </p>
                </div>
              </div>
              <div className="block">
                <img srcSet="/icons/coach-icon2.png 2x" alt="" />
                <div>
                  <h5>KINH NGHIỆM:</h5>
                  <p>- 15 năm Quản lý dự án thực thi..</p>
                  <p>- 6 năm là Nhà Huấn luyện doanh nghiệp tại ActionCOACH.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-item">
          <div className="self-center md:w-[330px] md:h-[460px] w-[260px] h-[370px]">
            <img
              src="/images/coach-3.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="top">
              <span>COACH</span>
              <h4>
                <span>Kayson</span> Nguyễn Tiến Quang
              </h4>
              <span>ActionCOACH CBD Firm</span>
            </div>
            <div className="bottom">
              <div className="block">
                <img srcSet="/icons/coach-icon1.png 2x" alt="" />
                <div>
                  <h5>HỌC VỊ:</h5>
                  <p>Đại học Bách Khoa Hà Nội - Chuyên ngành Tự động hóa.</p>
                </div>
              </div>
              <div className="block">
                <img srcSet="/icons/coach-icon2.png 2x" alt="" />
                <div>
                  <h5>KINH NGHIỆM:</h5>
                  <p>
                    - Hơn 10 năm kinh nghiệm làm việc tại tập đoàn đa quốc gia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-item">
          <div className="self-center md:w-[330px] md:h-[460px] w-[260px] h-[370px]">
            <img
              src="/images/coach-4.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="top">
              <span>COACH</span>
              <h4>
                <span>TheO</span> Vũ Bá Thế
              </h4>
              <span>ActionCOACH CBD Firm</span>
            </div>
            <div className="bottom">
              <div className="block">
                <img srcSet="/icons/coach-icon4.png 2x" alt="" />
                <div>
                  <h5>TẦM NHÌN: </h5>
                  <p className="mb-[20px]">
                    "Tạo sự khác biệt để thành công cho Doanh nghiệp".
                  </p>
                  <h5>XẾP HẠNG CỦA COACH:</h5>
                  <p>
                    Top 8 Nhà huấn luyện Doanh nghiệp xuất sắc nhất Thế giới
                    Tháng 10/2020.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-item">
          <div className="self-center md:w-[330px] md:h-[460px] w-[260px] h-[370px]">
            <img
              src="/images/coach-5.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="top">
              <span>COACH</span>
              <h4>
                <span>Neo</span> Nguyễn Đình Bảo
              </h4>
              <span>ActionCOACH CBD Firm</span>
            </div>
            <div className="bottom">
              <div className="block">
                <img srcSet="/icons/coach-icon1.png 2x" alt="" />
                <div>
                  <h5>HỌC VỊ:</h5>
                  <p>
                    -Kỹ sư Môi trường – Trường Đại học Bách khoa Thành phố Hồ
                    Chí Minh.
                  </p>
                  <p>
                    - Quản lý dự án – Trường Đại học mở Thành phố Hồ Chí Minh.
                  </p>
                </div>
              </div>
              <div className="block">
                <img srcSet="/icons/coach-icon2.png 2x" alt="" />
                <div>
                  <h5>KINH NGHIỆM:</h5>
                  <p>Trên 10 năm làm việc tại:</p>
                  <p>- Các Công ty Việt Nam và nước ngoài.</p>
                  <p>- CTCP sản xuất với số lượng nhân viên đến hơn 2000.</p>
                  <p>- Tập đoàn Đa quốc gia Châu u với lịch sử trên 100 năm.</p>
                  <p>- Các Công ty trong nước với doanh thu đến 100 tỷ/năm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-item">
          <div className="self-center md:w-[330px] md:h-[460px] w-[260px] h-[370px]">
            <img
              src="/images/coach-6.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="top">
              <span>COACH</span>
              <h4>
                <span>Tamy</span> Lê Thị Ngọc Thảo
              </h4>
              <span>ActionCOACH CBD Firm</span>
            </div>
            <div className="bottom">
              <div className="block">
                <img srcSet="/icons/coach-icon1.png 2x" alt="" />
                <div>
                  <h5>HỌC VỊ:</h5>
                  <p>
                    Đại Học Hutech - Chuyên ngành Quản trị Nhà Hàng - Khách Sạn.
                  </p>
                </div>
              </div>
              <div className="block">
                <img srcSet="/icons/coach-icon2.png 2x" alt="" />
                <div>
                  <h5>KINH NGHIỆM:</h5>
                  <p>- 10 năm làm việc tại các Tập Đoàn Quốc Tế.</p>
                  <p>- Điều hành doanh nghiệp riêng của mình.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(0,0,0, 0.2)" }}
      onClick={onClick}
    />
  );
}

export default Slide;
