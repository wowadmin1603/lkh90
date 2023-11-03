import React from "react";

const Button = ({
  className = "",
  kind = "primary",
  children = "ĐĂNG KÝ NGAY",
  type = "button",
  href = "#form_register",
  ...props
}) => {
  let bgColor = "bg-primary";
  let border = "border-[#C0C4CC]";
  switch (kind) {
    case "primary":
      bgColor = "bg-primary";
      border = "border-[#C0C4CC]";
      break;
    case "secondary":
      bgColor = "bg-secondary";
      border = "border-[#C0C4CC]";
      break;
    case "ghost":
      bgColor = "bg-[rgba(17,_32,_114,_0.58)]";
      border = "border-white";
      break;
    default:
      break;
  }
  return (
    <a
      href={href}
      className={`${bgColor} border border-solid ${border} rounded-[50px] font-bold text-sm uppercase text-white px-10 py-5 inline-block ${className}`}
      type={type}
      kind={kind}
      {...props}
    >
      {children}
    </a>
  );
};

//test

export default Button;
