import Loader from "@/assets/Loader";
import React from "react";

type TextBtnProps = {
  title: string;
  className?: string;
  onClick?: (e: any) => void;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  className,
  isLoading,
  onClick,
}: TextBtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`flex items-center justify-center gap-3 bgPrimary rounded-4xl px-4 lg:px-5 py-3 xl:py-3.5 2xl:py-4 text-xs md:text-sm lg:text-base cursor-pointer text-white ${className}`}
    >
      {isLoading ? <Loader /> : <p>{title}</p>}
    </button>
  );
};

export default CustomButton;
