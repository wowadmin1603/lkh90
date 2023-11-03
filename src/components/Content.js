import React from "react";
import Title from "./common/Title";

const Content = () => {
  return (
    <section
      id="content"
      className="text-center content page-container md:mb-[75px] mb-[40px] lg:px-[80px]"
    >
      <Title
        small
        className="md:mb-[38px] mb-[20px] text-[20px] md:text-[40px]"
      >
        NỘI DUNG CHƯƠNG TRÌNH <br className="block md:hidden" /> GROWTH CLUB
      </Title>
      <div className="flex gap-x-[20px] lg:gap-x-[45px] gap-y-[20px] flex-col justify-between md:flex-row">
        <ContentList className="flex-1">
          <ContentItem>7:00 - 8:00: Check-in/Giao lưu Networking</ContentItem>
          <ContentItem kind="blank">
            8:00 - 8:10: Chào mừng & Hoạt động "Follow the Leader"
          </ContentItem>
          <ContentItem>
            8:10 - 8:30: Giới thiệu GrowthCLUB & Nhà huấn luyện
          </ContentItem>
          <ContentItem kind="blank">
            8:30 - 9:30: Tư duy và thói quen cốt lõi kiến tạo thành công
          </ContentItem>
          <ContentItem>9:30 - 9:55: Nghỉ giải lao và dùng Teabreak</ContentItem>
          <ContentItem kind="blank">
            9:55 - 10:50: 5 WAYS - CÔNG THỨC TẠO RA DÒNG TIỀN TRONG DOANH NGHIỆP
          </ContentItem>
          <ContentItem>
            10:55 - 11:55: KẾ HOẠCH QUÝ 4/2022 - BẢNG KẾ HOẠCH{" "}
          </ContentItem>
          <ContentItem kind="blank">
            11:55 - 13:30: Nghỉ trưa, dùng Cơm trưa
          </ContentItem>
        </ContentList>
        <ContentList title="Buổi CHIỀU" className="flex-1">
          <ContentItem kind="secondary">
            13:30 - 13:35: Hoạt động "Follow the Leader"
          </ContentItem>
          <ContentItem kind="blank">
            13:35 - 14:30: ĐỘI NGŨ GẮN KẾT - BỨT PHÁ VỀ ĐÍCH
          </ContentItem>
          <ContentItem kind="secondary">
            14:30 - 15:40: KẾ HOẠCH QUÝ 4/2022 - BẢNG KẾ HOẠCH
          </ContentItem>
          <ContentItem kind="blank">
            15:40 - 16:00: Giới thiệu GrowthCLUB Tháng 12/2022
          </ContentItem>
          <ContentItem kind="secondary">
            9:30 - 9:55: Nghỉ giải lao và dùng Teabreak
          </ContentItem>
          <ContentItem kind="blank">16:20 - 17:00: IVVM</ContentItem>
          <ContentItem kind="secondary">
            17:00 - 17:30: Viết thư và phiếu đánh giá Ref
          </ContentItem>
          <ContentItem kind="blank">
            17:30 - 17:50: Wifle- Điều thú vị sau chương trình
          </ContentItem>
          <ContentItem kind="secondary">
            17:50 - 18:00: Kết thúc chương trình
          </ContentItem>
        </ContentList>
      </div>
    </section>
  );
};

const ContentList = ({ title = "Buổi Sáng", children, className = "" }) => {
  return (
    <div
      className={`p-[15px] md:p-7 border-[12px] border-solid border-primary rounded-[10px] bg-white ${className}`}
    >
      <h3 className="font-bold text-[20px] md:text-[32px] mb-[15px] md:mb-[25px] uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
};

const ContentItem = ({
  kind = "primary",
  children = "7:00 - 8:00: Check-in/Giao lưu Networking",
}) => {
  let bgColor = "bg-primary";
  let textColor = "text-white";
  switch (kind) {
    case "primary":
      bgColor = "bg-primary";
      textColor = "text-white";
      break;
    case "secondary":
      bgColor = "bg-secondary";
      textColor = "text-white";
      break;
    case "blank":
      bgColor = "bg-white";
      textColor = "text-black";
      break;

    default:
      break;
  }
  return (
    <div
      className={`text-[10px] md:text-[12px] lg:text-[16px] flex items-center text-justify w-full py-[12px] md:py-[15px] md:px-[15px] px-[12px]  lg:h-[76px] ${bgColor}`}
    >
      <span className={`font-bold ${textColor}`}>{children}</span>
    </div>
  );
};

export default Content;
