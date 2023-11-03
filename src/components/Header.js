import React, { useState } from "react";
import Button from "./common/Button";
import Hamburger from "./common/Hamburger";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggleHamburger = () => {
    setShow((show) => !show);
  };
  return (
    <header className="bg-[rgba(17,_32,_114,_0.5)] md:bg-transparent header page-container flex items-center justify-start md:justify-end py-[20px] md:py-[30px] absolute z-10 left-0 right-0 top-0">
      <a
        href="/"
        className="w-full max-w-[197px] inline-block md:mr-[80px] lg:mr-[275px]"
      >
        <img
          srcSet="/images/logo.png 2x"
          className="object-cover w-full h-full"
          alt=""
        />
      </a>
      <div className={`items-center hidden md:flex`}>
        <div className="menu flex items-center gap-x-[30px] mr-[33px]">
          <a href="#content" className="font-medium text-white uppercase">
            NỘI DUNG
          </a>
          <a href="#value" className="font-medium text-white uppercase">
            GIÁ TRỊ
          </a>
          <a href="#coach" className="font-medium text-white uppercase">
            DIỄN GIẢ
          </a>
        </div>
        <Button kind="primary"></Button>
      </div>
      {show && (
        <div
          className={`items-center text-center absolute top-full left-0 right-0 py-[15px] bg-[rgba(17,_32,_114,_0.5)]`}
        >
          <div className="menu flex flex-col items-center gap-x-[30px]">
            <a
              href="#content"
              className="font-medium text-white uppercase mb-[10px]"
            >
              NỘI DUNG
            </a>
            <a
              href="#value"
              className="font-medium text-white uppercase mb-[10px]"
            >
              GIÁ TRỊ
            </a>
            <a
              href="#coach"
              className="font-medium text-white uppercase mb-[10px]"
            >
              DIỄN GIẢ
            </a>
          </div>
          <Button kind="primary"></Button>
        </div>
      )}
      <Hamburger
        className="block ml-auto md:hidden"
        onClick={handleToggleHamburger}
      ></Hamburger>
    </header>
  );
};

export default Header;
