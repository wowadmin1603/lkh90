import React from "react";
import Title from "./common/Title";

const Ticket = () => {
  return (
    <section className="ticket page-container md:mb-[75px] mb-[40px]">
      <div className="text-center">
        <Title>KHOẢN ĐẦU TƯ CHO CHƯƠNG TRÌNH</Title>
        <p className="font-medium mb-[35px]">
          Chúng tôi sẽ mang lại giá trị cho khoản thời gian mà khách hàng đã đầu
          tư
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-y-[20px] gap-x-[80px] md:mb-[50px] mb-[30px]">
        <div>
          <img src="/images/ticket-1.png" alt="" />
        </div>
        <div>
          <img src="/images/ticket-2.png" alt="" />
        </div>
        <div>
          <img src="/images/ticket-3.png" alt="" />
        </div>
      </div>
      <div className="text-center">
        <img src="/images/bank.png" className="inline-block" alt="" />
      </div>
    </section>
  );
};

export default Ticket;
