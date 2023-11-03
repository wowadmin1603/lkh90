import React from "react";
import Button from "./common/Button";

const CTA = () => {
  return (
    <section className="CTA">
      <div className="page-container md:mb-[75px] mb-[40px] md:py-[70px] py-[40px] text-center">
        <h2 className="text-center max-w-[1110px] text-white font-semibold text-[16px] md:text-[32px] leading-[1.6] mx-auto md:mb-10 mb-[20px]">
          HÃY CÙNG ĐỘI NGŨ CỦA MÌNH <span>LẬP KẾ HOẠCH HÀNH ĐỘNG</span> CHO QUÝ{" "}
          <span>IV/2022!!! ĐĂNG KÝ</span> NGAY HÔM NAY ĐỂ NHẬN ĐƯỢC{" "}
          <span>NHIỀU ƯU ĐÃI</span>
        </h2>
        <Button kind="secondary"></Button>
      </div>
    </section>
  );
};

export default CTA;
