import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, error = false, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      {...field}
      {...props}
      className={`px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px] ${
        error ? "border border-[#C51111]" : ""
      }`}
    />
  );
};

export default Input;
