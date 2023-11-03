import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const Dropdown = ({
  control,
  setValue,
  name,
  data,
  error = false,
  dropdownSelect = "Select your job",
}) => {
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValues: "",
  });
  const { isShow, setIsShow, nodeRef } = useClickOutSide();
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setIsShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownSelect);
  useEffect(() => {
    if (dropdownValue === "") {
      setLabel(dropdownSelect);
    }
  }, [dropdownValue]);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className={`flex items-center justify-between px-[17px] h-[50px] rounded-[5px] bg-white cursor-pointer bg text-sm ${
          error ? "border border-[#C51111]" : ""
        }`}
        onClick={() => setIsShow(!isShow)}
      >
        <span>{label}</span>
        <img src="/icons/angle-down.png" className="w-[14px]" alt="" />
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          isShow ? "" : "opacity-0 invisible"
        }`}
      >
        {data &&
          data.map((item) => (
            <div
              className="p-[17px] cursor-pointer hover:bg-gray-400 hover:rounded-lg text-sm"
              onClick={handleClickDropdownItem}
              data-value={item.value}
              key={item.id}
            >
              {item.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
