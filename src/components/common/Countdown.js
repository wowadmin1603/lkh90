import React, { useEffect, useState } from "react";

const Countdown = () => {
  const numberFormat = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const timediff = Math.floor(
    new Date("September 25,2022 00:00:00").getTime() - new Date().getTime()
  );
  const [deadline, setDeadline] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(timediff);
  useEffect(() => {
    if (timediff > 0) {
      const timer = setTimeout(() => {
        setDuration(duration - 1000);
        setDeadline({
          days: numberFormat(Math.floor(duration / (1000 * 60 * 60 * 24))),
          hours: numberFormat(
            Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: numberFormat(
            Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: numberFormat(Math.floor((duration % (1000 * 60)) / 1000)),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [duration]);
  return (
    <div className="justify-center md:justify-start md:w-[407px] h-[95px] flex items-center gap-x-2 mx-auto">
      <Box>{deadline.days}</Box>
      <Box type="Giờ">{deadline.hours}</Box>
      <Box type="Phút ">{deadline.minutes}</Box>
      <Box type="Giây">{deadline.seconds}</Box>
    </div>
  );
};

const Box = ({ children, type = "Ngày" }) => {
  return (
    <div className="md:w-[95px] md:h-[95px] w-[55px] h-[55px] rounded-[10px] bg-secondary flex items-center flex-col justify-between text-white p-[10px]">
      <h4 className="font-semibold md:text-[52px] text-[24px] flex-1 leading-[1]">
        {children}
      </h4>
      <span className="md:text-sm text-[10px] font-bold">{type}</span>
    </div>
  );
};

export default Countdown;
