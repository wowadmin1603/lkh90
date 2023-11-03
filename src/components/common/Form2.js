import React, { useRef, useState } from "react";
import validate from "validate.js";
import emailjs from "@emailjs/browser";

const timeNow = new Date();
const constraints = {
  gender: {
    presence: { message: "Vui lòng nhập Ông hoặc Bà." },
  },
  name: {
    presence: { message: "Vui lòng nhập họ và tên." },
    length: {
      minimum: 3,
      tooShort: "Họ và tên không được ngắn hơn %{count} ký tự.",
      maximum: 50,
      tooLong: "Họ và tên không được dài hơn %{count} ký tự.",
    },
  },
  phone: {
    presence: { message: "Vui lòng nhập số điện thoại." },
    length: {
      minimum: 8,
      tooShort: "Số điện thoại không được ngắn hơn %{count} ký tự.",
      maximum: 12,
      tooLong: "Số điện thoại không được dài hơn %{count} ký tự.",
    },
  },
  email: {
    presence: { message: "Vui lòng nhập email." },
    email: {
      message: "Định dạng email không đúng.",
    },
  },
  option: {
    presence: { message: "Vui lòng chọn loại vé." },
  },
};

const Form2 = () => {
  const form = useRef();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState([]);
  const [state, setState] = useState({
    title: "CRM_FORM_XDDN" + timeNow.toLocaleDateString(),
    name: "",
    gender: "",
    phone: "",
    email: "",
    company: "",
    position: "",
    option: "",
    time: "",
    rid: 1,
  });
  const sendEmail = (e) => {
    setLoad(true);
    e.preventDefault();
    const valid = validate(state, constraints);
    console.log(valid);
    if (valid) {
      setError(valid);
      setLoad(false);
      return;
    }

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
          setLoad(false);
        },
        (error) => {
          console.log(error.text);
          alert("Vui lòng đăng ký lại.");
          setLoad(false);
        }
      );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
      title: state.title + timeNow.toLocaleDateString(),
    });
    console.log(state);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-y-[9px]">
        <div className="grid grid-cols-3 gap-x-[9px]">
          <div>
            <input
              className="px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
              type="text"
              id="gender"
              name="gender"
              placeholder="(Ông/Bà)"
              value={state.gender}
              onChange={handleChange}
            />
            {error.gender && (
              <p className="mt-2 text-black">{error.gender[0]}</p>
            )}
          </div>
          <div className="col-span-2">
            <input
              className="px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
              type="text"
              id="name"
              name="name"
              placeholder="Họ Tên"
              value={state.name}
              onChange={handleChange}
            />
            {error.name && <p className="mt-2 text-black">{error.name[0]}</p>}
          </div>
        </div>
        <div>
          <input
            className="px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={state.email}
            onChange={handleChange}
          />

          {error.email && <p className="mt-2 text-black">{error.email[0]}</p>}
        </div>
        <div>
          <input
            className="px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
            id="phone"
            name="phone"
            placeholder="Số điện thoại"
            type="phone"
            value={state.phone}
            onChange={handleChange}
          />
          {error.phone && <p className="mt-2 text-black">{error.phone[0]}</p>}
        </div>
        <div className="grid grid-cols-4 gap-x-[9px]">
          <div className="col-span-2">
            <input
              className="px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
              id="company"
              name="company"
              placeholder="Công ty"
              type="text"
              value={state.company}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <input
              className="px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
              id="position"
              name="position"
              placeholder="Chức vụ"
              type="text"
              value={state.position}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <select
            className="text-sm px-[17px] rounded-[5px] bg-white outline-none w-full placeholder:text-sm placeholder:text-black h-[50px]"
            id="option"
            name="option"
            onChange={handleChange}
          >
            <option className="text-[#cdcdcd]">Loại vé</option>
            <option value="1 vé">Mua 1 vé</option>
            <option value="3 vé">Mua 3 vé</option>
            <option value="5 vé">Mua 5 vé</option>
          </select>
          {error.option && <p className="mt-2 text-black">{error.option[0]}</p>}
        </div>
      </div>
      <div className="text-center">
        {load == false ? (
          <button
            type="submit"
            className="bg-primary w-[175px] h-[62px] border-[#C0C4CC] border border-solid rounded-[50px] font-bold text-sm text-center uppercase text-white  inline-block mt-[35px]"
          >
            ĐĂNG KÝ NGAY
          </button>
        ) : (
          <button className="bg-primary w-[175px] h-[62px] border-[#C0C4CC] border border-solid rounded-[50px] mt-[35px] font-bold hover:shadow-2xl text-sm text-white uppercase inline-flex justify-center items-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            ĐANG GỬI
          </button>
        )}
      </div>
    </form>
  );
};

export default Form2;
