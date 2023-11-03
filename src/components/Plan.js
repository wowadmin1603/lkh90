import React from "react";
import Title from "./common/Title";

const Plan = () => {
  return (
    <section className="plan page-container md:mb-[75px] mb-[40px]">
      <div className="intro flex gap-y-[20px] gap-x-[50px] lg:flex-row flex-col">
        <div className="flex lg:hidden leading-[1.6] mx-[18px] slogan page-container h-auto px-[18px] py-[27px]  rounded-[10px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25);] items-center justify-center">
          <h2 className="text-center  font-semibold text-[18px]  text-white">
            KINH DOANH MÀ{" "}
            <span className="text-secondary">KHÔNG LẬP KẾ HOẠCH</span> LÀ LẬP KẾ
            HOẠCH CHO SỰ <span className="text-secondary">THẤT BẠI</span>
          </h2>
        </div>
        <div className="flex items-center justify-center flex-1 xl:bg-[url('../public/images/bg-video.png')] bg-center bg-no-repeat bg-cover">
          <video
            className="video"
            src="/videos/benefit-video.mp4"
            width="92%"
            controls
          ></video>
        </div>
        <div className="flex-1">
          <div className="md:mb-5 mb-[10px]">
            <span className="block font-medium">Giới thiệu chương trình</span>{" "}
            <span className="block font-bold md:text-[20px] text-base">
              GROWTHCLUB
            </span>
            <Title>LẬP KẾ HOẠCH 90 NGÀY</Title>
            <span className="block md:text-[24px] text-[20px] font-semibold leading-[1.6]">
              "GẮN KẾT ĐỘI NGŨ - BỨT PHÁ VỀ ĐÍCH"
            </span>
          </div>
          <div>
            <p className="mb-[10px] md:mb-8 leading-[1.6] text-justify">
              GrowthCLUB là chương trình Huấn luyện doanh nghiệp hàng đầu trên
              toàn thế giới, được thiết kế để hướng dẫn Chủ doanh nghiệp xây
              dựng doanh nghiệp vững mạnh thông qua việc Lập kế hoạch kinh doanh
              đơn giản hơn, hiệu quả hơn và ít tốn kém hơn.
            </p>
            <p className="leading-[1.6] text-justify">
              Chương trình GrowthCLUB - Gắn kết đội ngũ - Bứt phá về đích còn là
              nơi để các Anh/Chị Chủ Doanh Nghiệp lên kế hoạch cho quý IV cuối
              năm. Đo lường kết quả để biết được thành quả sau một năm làm việc
              của công ty như thế nào? Điều gì đã đạt được? Điều gì chưa thực
              hiện được? Điều gì cần cải tiến và Điều gì mà Doanh Nghiệp cần
              hướng đến vào năm 2023?...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
