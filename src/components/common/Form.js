import React, { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Dropdown from "./Dropdown";
import emailjs from "@emailjs/browser";

const schema = yup
  .object({
    name: yup.string().required("Điền vào tên của bạn"),
    email: yup
      .string()
      .email("Định dạng email chưa đúng")
      .required("Điền vào email của bạn"),
    gender: yup.string().required("Điền vào Ông / Bà"),
    phone: yup.string().required("Điền vào số điện thoại của bạn"),
    option: yup.string().required("Chọn loại vé bạn múa đăng ký"),
  })
  .required();

const dropdownData = [
  {
    id: 1,
    value: "1 vé",
    text: "Mua 1 vé",
  },
  {
    id: 2,
    value: "3 vé",
    text: "Mua 3 vé",
  },
  {
    id: 3,
    value: "5 vé",
    text: "Mua 5 vé",
  },
];

const Form = () => {
  const form = useRef();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {},
  });
  const onSubmitHandler = (values) => {
    emailjs
      .sendForm(
        "service_6z30q6f",
        "template_kr62le5",
        form.current,
        "o1T-nm0evXVmwtWzV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Đăng ký thành công.");
          reset({
            name: "",
            email: "",
            phone: "",
            gender: "",
            option: "",
            company: "",
            position: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Vui lòng đăng ký lại.");
        }
      );
  };
  return (
    <form ref={form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex flex-col gap-y-2">
        <div className="grid grid-cols-3 gap-x-2">
          <div>
            <Input
              name="gender"
              id="gender"
              placeholder="(Ông/Bà)"
              control={control}
              type="text"
            ></Input>
            {errors.gender && (
              <p className="text-sm text-red-600">{errors.gender.message}</p>
            )}
          </div>
          <div className="col-span-2">
            <Input
              name="name"
              id="name"
              placeholder="Họ Tên"
              control={control}
              type="text"
            ></Input>
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div>
          <Input
            name="email"
            id="email"
            placeholder="Email"
            control={control}
            type="email"
          ></Input>
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            name="phone"
            id="phone"
            placeholder="Số điện thoại"
            control={control}
            type="text"
          ></Input>
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div>
            <Input
              name="company"
              id="company"
              placeholder="Công ty"
              control={control}
              type="text"
            ></Input>
            {errors.company && (
              <p className="text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>
          <div>
            <Input
              name="position"
              id="position"
              placeholder="Chức vụ"
              control={control}
              type="text"
            ></Input>
            {errors.position && (
              <p className="text-sm text-red-600">{errors.position.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <Dropdown
            control={control}
            setValue={setValue}
            name="option"
            data={dropdownData}
            dropdownSelect="Select options"
          ></Dropdown>
          {errors.option && (
            <p className="text-sm text-red-600">{errors.option.message}</p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`w-[175px] border border-solid bg-primary border-[#C0C4CC] rounded-[50px] font-bold text-sm uppercase text-white px-10 py-5 inline-block ${
              isSubmitting ? "opacity-50" : ""
            }`}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 mx-auto border-2 border-t-2 rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
