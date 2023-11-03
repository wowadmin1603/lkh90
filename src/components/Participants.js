import React from "react";
import Button from "./common/Button";
import Countdown from "./common/Countdown";
import Title from "./common/Title";

const Participants = () => {
  return (
    <section className="participants bg-[url('../public/images/bg.png')] lg:bg-[url('../public/images/participants.png')] h-auto w-full bg-center bg-cover bg-no-repeat md:mb-[75px] mb-[40px] pt-[15px] pb-[60px] md:pt-[20px] lg:py-[60px] relative">
      <div className="page-container">
        <div className="flex flex-col justify-between lg:items-start lg:flex-row">
          <div className="mb-[10px] lg:mb-0">
            <Title small className="mb-[10px]">
              ĐỐI TƯỢNG THAM GIA
            </Title>
            <div className="flex items-center mb-1">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
                <img srcSet="/icons/check.png 2x" alt="" />
              </span>
              <p className="font-semibold ml-[10px] ">
                Chủ doanh nghiệp/CEO/Chủ tịch HĐQT
              </p>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
                <img srcSet="/icons/check.png 2x" alt="" />
              </span>
              <p className="font-semibold ml-[10px] ">Đội ngũ nhân sự</p>
            </div>
          </div>
          <div className="justify-between block text-left lg:text-right lg:block md:flex">
            <div>
              <h3 className="mb-2 text-[20px] font-bold text-primary">
                HÌNH THỨC TỔ CHỨC OFFLINE
              </h3>
              <p className="font-bold leading-[1.6] ">
                Thời gian: 08:00 - 18:00 <br />
                Chủ nhật, ngày 25/09/2022 <br />
                Địa điểm: ChamPa Island Nha Trang - Sảnh Lakshmi,
              </p>
              <p className="text-[18px] font-bold lg:mt-2 text-secondary">
                Số 304, Đường 2/4, Nha Trang
              </p>
            </div>
            <div className="mt-4 text-center md:text-left lg:text-right mr-0 md:mr-[20px] lg:mr-0">
              <img
                src="/images/qr-code.jpg"
                className="w-[140px] h-[140px] inline-block"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:mt-[50px] mt-[20px]">
          <Countdown></Countdown>
          <div className="text-center md:mt-[50px] mt-[20px]">
            <Button></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participants;
