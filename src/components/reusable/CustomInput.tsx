import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  errorMessage?: string;
  register?: object;
  htmlFor?: string;
  label: string;
};
import { TbMail, TbLockPassword } from "react-icons/tb";

const CustomInput = ({
  type,
  placeholder,
  required,
  className,
  icon,
  register,
  errorMessage,
  label,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={type} className="text-black text-sm xl:text-base">
        {label}
      </label>
      <div className="flex flex-col">
        <div className="flex items-center border border-[#E3EFFC] rounded-4xl bg-white w-full">
          <div
            className={`${
              icon ? "gap-1 md:gap-2 pl-3 xl:pl-4" : ""
            } flex items-center w-full text-xs md:text-sm xl:text-base`}
          >
            {icon && icon}
            <input
              type={type}
              required={required ? true : false}
              {...register}
              placeholder={placeholder}
              className={`${
                icon
                  ? "rounded-r-4xl w-full h-full pl-1 py-3 xl:py-3.5 2xl:py-4 outline-[#A3D8F5] placeholder:text-[#D9D9D9]"
                  : "rounded-4xl w-full h-full pl-3 xl:pl-4 py-3 xl:py-3.5 2xl:py-4 outline-[#A3D8F5] placeholder:text-[#D9D9D9]"
              } ${className} ${type === "number" ? "spin-button-none" : ""}`}
            />
          </div>
        </div>
        {errorMessage && (
          <span className="text-red-500 text-xs">{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
