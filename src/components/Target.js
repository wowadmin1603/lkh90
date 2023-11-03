import React from "react";
import Button from "./common/Button";

const Target = () => {
  return (
    <section className="target w-full h-auto lg:h-[345px] mb-[45px]">
      <div className="relative page-container text-justify md:text-center py-[40px] md:py-[60px]">
        <div className="lg:mr-[250px]">
          <p className="font-bold text-white leading-[1.6] md:mb-[40px] mb-[30px]">
            Vào cuối Chương trình GrowthCLUB, Anh/Chị sẽ hình dung rõ ràng về
            doanh nghiệp của mình sau 90 ngày tới,
            <br className="hidden lg:block" />
            cũng như có được một{" "}
            <span className="text-[20px] md:text-[24px] text-secondary leading-[1.6]">
              BẢN KẾ HOẠCH ĐỂ ĐẠT ĐƯỢC MỤC TIÊU
            </span>{" "}
            đề ra.
            <br className="hidden lg:block" />
            Vậy Anh/Chị còn chờ gì nữa? Hãy liên hệ chúng tôi ngay để nhanh
            chóng đặt chỗ tham gia chương trình GrowthCLUB sắp tới.
            <br className="hidden lg:block" />
            Mong sớm gặp lại Anh/Chị tại Chương trình.
          </p>
          <div className="text-center">
            <Button></Button>
          </div>
        </div>

        <img
          src="/images/main-coach.png"
          className="absolute top-[-115px] right-0 hidden lg:block"
          alt=""
        />
      </div>
    </section>
  );
};

export default Target;
