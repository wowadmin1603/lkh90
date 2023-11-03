import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#1E1E1E] md:pt-[75px] pt-[40px] pb-[30px]">
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 page-container text-white md:px-[80px]">
        <div>
          <a href="/" className="inline-block w-full max-w-[249px] mb-[20px]">
            <img
              srcSet="/images/logo.png 2x"
              alt=""
              className="object-cover w-full h-full"
            />
          </a>
          <p className="text-justify w-[285px]">
            ActionCOACH là thương hiệu huấn luyện doanh nghiệp hàng đầu thế
            giới, được Brad Sugars thành lập năm 1993 tại Brisbane, Australia
            trong thời điểm khái niệm về huấn luyện doanh nghiệp còn khá lạ lẫm
            đối với các quốc gia trên thế giới.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-semibold mb-[20px] md:mb-[65px]">
            THÔNG TIN LIÊN HỆ
          </h3>
          <div>
            <div className="flex gap-x-[14px] items-center justify-start mb-[15px] md:mb-[25px]">
              <img srcSet="/icons/mark.png 2x" alt="" />
              <span>61 Lý Nam Đế, Nha Trang, Khánh Hoà</span>
            </div>
            <div className="flex gap-x-[14px] items-center justify-start mb-[15px] md:mb-[25px]">
              <img srcSet="/icons/envelope.png 2x" alt="" />
              <a href="mailto:info@actioncoachcht.com">
                info@actioncoachcht.com
              </a>
            </div>
            <div className="flex gap-x-[14px] items-center justify-start mb-[15px] md:mb-[25px]">
              <img srcSet="/icons/phone.png 2x" alt="" />
              <a href="tel:091 390 38 33">091 390 38 33</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-semibold mb-[20px] md:mb-[65px]">
            FANPAGE CHT FIRM
          </h3>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FActionCoachCHTFirm%2F&tabs&width=280&height=180&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
              width={280}
              height={180}
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
