import React from "react";
import Slide from "./common/Slide";
import Title from "./common/Title";

const Coach = () => {
  return (
    <section
      id="coach"
      className="coach page-container md:pl-[80px] md:mb-[120px] mb-[60px]"
    >
      <Title small className="md:mb-[35px] text-center">
        NHÀ HUẤN LUYỆN CỦA <br className="block md:hidden" /> CHƯƠNG TRÌNH
      </Title>
      <Slide></Slide>
      <div id="value"></div>
    </section>
  );
};

export default Coach;
