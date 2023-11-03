import React from "react";
import Form from "./common/Form";
import Form2 from "./common/Form2";

const Register = () => {
  return (
    <section
      id="form_register"
      className="register bg-[url('../public/images/bg-form-mb.png')] lg:bg-[url('../public/images/bg-form.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-between page-container md:py-[70px] py-[50px]">
        <div className="mx-auto md:mx-0">
          <div className="h-[72px] bg-secondary text-[18px] md:text-[36px] text-white items-center justify-center px-[15px] md:px-8 md:mb-[45px] mb-[20px] hidden lg:inline-flex">
            CHƯƠNG TRÌNH GROWTHCLUB
          </div>
          <h2 className="lg:block hidden font-bold text-[28px] md:text-[64px] text-white leading-[1.5] mb-[30px] md:mb-0">
            GẮN KẾT ĐỘI NGŨ <br />{" "}
            <span className="ml-[40px] md:ml-[140px]">BỨT PHÁ VỀ ĐÍCH</span>
          </h2>
        </div>
        <div className="form-register w-auto md:w-[446px] rounded-[10px] p-[25px_12px_30px_12px]  md:p-[45px_32px_50px_32px]">
          <h3 className="text-[16px] mb-[10px] md:mb-[20px] md:text-[20px] font-bold text-white leading-[1.5] text-center">
            Đừng bỏ lỡ cơ hội Lập kế hoạch Quý IV/2022 để BỨT PHÁ chỉ vì sự đắn
            đo của Anh/Chị
          </h3>
          <Form2></Form2>
          {/* <Form></Form> */}
        </div>
      </div>
    </section>
  );
};

export default Register;
