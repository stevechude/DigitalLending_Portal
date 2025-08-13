"use client";
import KeystoneIcon from "@/assets/KeystoneIcon";
import React from "react";
import CustomInput from "./reusable/CustomInput";
import { TbLockPassword, TbMail } from "react-icons/tb";
import CustomButton from "./reusable/CustomButton";
import { useRouter } from "next/navigation";

const Login = () => {
  const navigate = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    navigate.push("/dashboard");
  };

  return (
    <div className="bg-white relative h-screen">
      <div className="flex items-center justify-between p-2 md:px-4 md:py-3 xl:py-4 xl:px-8 h-full w-full">
        <div className="hidden lg:flex lg:w-[60%] h-full rounded-2xl">
          <div className="w-full h-full bg-[url('/digital.png')] bg-no-repeat object-cover bg-cover rounded-2xl">
            <div className="p-[28px] flex flex-col justify-between h-full">
              <div>
                <KeystoneIcon />
              </div>
              <div className="flex flex-col gap-2 text-white pb-12 max-w-[636px]">
                <p className="text-3xl font-semibold">
                  Keystone Digital Lending Portal
                </p>
                <p>
                  Stay updated with Keystone's digital lending portal. Track
                  your orders seamlessly, manage returns with ease, and keep
                  your customers informed at every step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:items-center justify-center w-full h-full border border-[#98a2b3] rounded-2xl lg:border-0 overflow-y-auto lg:w-[50%] lg:pl-[109px] lg:pr-[88px]">
          <div className="flex flex-col mt-10 gap-4 lg:gap-6 xl:gap-8 items-center lg:items-start 2xl:mt-0 2xl:justify-center w-full px-2 h-full">
            <div className="flex flex-col gap-2 mt-10">
              <p className="text-primary font-semibold text-xl md:text-3xl">
                Digital Lending Portal
              </p>
              <p className="text-[#595959] text-xs md:text-sm lg:text-base text-center lg:text-start">
                Kindly provide your correct credentials to login
              </p>
            </div>
            <form className="flex flex-col gap-4 lg:gap-6 xl:gap-7 w-full px-2 lg:p-0">
              <CustomInput
                type="email"
                label="Email"
                placeholder="Email"
                icon={<TbMail size={22} />}
              />
              <CustomInput
                type="password"
                label="Password"
                placeholder="Create a secure password for your account."
                icon={<TbLockPassword size={22} />}
              />
              <CustomInput
                type="password"
                label="Token"
                placeholder="Create a secure password for your account."
                icon={<TbLockPassword size={22} />}
              />
              <CustomButton
                onClick={handleLogin}
                title="Login"
                className="w-full mt-10 xl:mt-16 2xl:mt-30"
              />
            </form>
            <div className="flex items-center justify-center w-full">
              <p className="font-satoshi textSecondary text-center font-medium text-xs md:text-sm xl:text-base">
                © <span className="text-[#002561]">2025</span> Keystone Bank
                Ltd. Licensed by the CBN.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
