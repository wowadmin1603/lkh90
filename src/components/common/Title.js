import React from "react";

const Title = ({
  children = "LẬP KẾ HOẠCH 90 NGÀY",
  className = "",
  small,
}) => {
  return (
    <h2
      className={`font-bold md:text-[40px] text-primary leading-[1.5] ${className} ${
        small ? "text-[24px]" : "text-[32px]"
      }`}
    >
      {children}
    </h2>
  );
};

export default Title;
