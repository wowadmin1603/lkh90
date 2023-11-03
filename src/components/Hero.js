import React from "react";

const Hero = () => {
  return (
    // pt-[20vh] md:pt-[22vh] lg:pt-[25vh]
    <section className="hero w-full h-[680px] md:h-[760px] lg:h-[780px] relative  bg-[url('../public/images/hero-mb.png')] md:bg-[url('../public/images/hero.png')]  bg-center bg-cover bg-no-repeat md:mb-[50px] lg:mb-[165px] mb-[40px] pt-[120px] md:pt-[160px] lg:pt-[120px]">
      <div className="text-center md:text-right content page-container">
        <p className="mb-[10px] md:mb-5  md:text-[24px] lg:text-[36px] text-[18px] font-bold text-white uppercase">
          CHƯƠNG TRÌNH GROWTHCLUB
        </p>
        <h1 className="mb-[5px] font-bold text-[50px] md:text-[68px] lg:text-[96px] text-secondary uppercase leading-[1] md:mb-3">
          LẬP KẾ HOẠCH <br className="hidden md:block lg:hidden" /> 90 NGÀY
        </h1>
        <p className="mb-[25px] md:text-[24px] lg:text-[36px] text-[18px] font-bold text-white uppercase md:mb-5">
          GẮN KẾT ĐỘI NGŨ - BỨT PHÁ VỀ ĐÍCH
        </p>
        <p className="md:text-[14px] lg:text-[16px] font-semibold text-white leading-[1.6]">
          <span className="md:block">
            Thời gian: 08:00 - 18:00 | <br className="block md:hidden" /> Chủ
            nhật, ngày 25/09/2022
          </span>
          <span className="md:block">
            <br className="block md:hidden" /> Địa điểm: ChamPa Island Nha Trang
            - <br className="block md:hidden" />
            Sảnh Lakshmi,
            <br className="block md:hidden" />
          </span>
          <span className="md:block">Số 304, Đường 2/4, Nha Trang</span>
        </p>
        <div className="text-center mt-7 md:mt-4 md:text-right">
          <img
            src="/images/qr-code.jpg"
            className="w-[140px] h-[140px] inline-block"
            alt=""
          />
        </div>
      </div>
      <div className="hidden lg:flex leading-[1.6] mx-[18px] text-center xl:text-justify xl:mx-auto slogan page-container h-auto px-[18px] py-[27px] md:h-[160px] rounded-[10px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25);] items-center justify-center absolute bottom-[-70px] md:bottom-[-80px] left-0 right-0">
        <h2 className="text-center md:text-left font-semibold text-[18px] md:text-[32px] text-white">
          KINH DOANH MÀ{" "}
          <span className="text-secondary">KHÔNG LẬP KẾ HOẠCH</span> LÀ LẬP KẾ
          HOẠCH CHO SỰ <span className="text-secondary">THẤT BẠI</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
