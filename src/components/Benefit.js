import React from "react";
import Title from "./common/Title";

const Benefit = () => {
  return (
    <section className="benefit mb-[50px] page-container">
      <Title small className="max-w-[818px] text-center mx-auto mb-8">
        LỢI ÍCH KHI CHỦ DOANH NGHIỆP CÙNG ĐỘI NGŨ THAM GIA CHƯƠNG TRÌNH
      </Title>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-x-[30px]">
        <BenefitItem></BenefitItem>
        <BenefitItem
          icon="/icons/benefit-2.png"
          content="Cơ hội học hỏi cách thực thi chiến lược cho doanh nghiệp từ các Chủ doanh nghiệp khác."
        ></BenefitItem>
        <BenefitItem
          icon="/icons/benefit-3.png"
          content="Mở rộng mạng lưới các mối quan hệ thông qua việc giao lưu và gặp gỡ HƠN 100 chủ doanh nghiệp khác tại khu vực."
        ></BenefitItem>
        <BenefitItem
          icon="/icons/benefit-4.png"
          content="Cách thức gắn kết đội ngũ để bứt phá và đạt được Mục tiêu năm 2022."
        ></BenefitItem>
      </div>
    </section>
  );
};

const BenefitItem = ({
  icon = "/icons/benefit-1.png",
  content = "Lập Kế hoạch hành động cho Doanh nghiệp Quý IV/2022.",
}) => {
  return (
    <div className="flex flex-col items-center gap-y-5 benefit-item w-full md:min-h-[296px] rounded-[10px] border border-solid border-[#D5D5D5] text-justify p-[15px] md:py-[32px] md:px-[34px]">
      <img
        srcSet={`${icon} 2x`}
        alt=""
        className="w-[40px] h-[40px] md:w-[77px] md:h-[77px]"
      />
      <p className="font-semibold text-white leading-[1.6]">{content}</p>
    </div>
  );
};

export default Benefit;
