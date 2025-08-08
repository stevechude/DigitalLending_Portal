"use client";
import Handle from "@/assets/Handle";
import KeystoneIcon from "@/assets/KeystoneIcon";
import LogoutIcon from "@/assets/LogoutIcon";
import { SideBarLinks } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bgPrimary hidden lg:flex flex-col justify-between max-w-[300px] w-[280px] h-screen">
        <div className="flex flex-col gap-[54px]">
          <div className="h-[75px] w-full border-b border-b-white flex items-center">
            <div className="flex items-center justify-between w-full px-3">
              <KeystoneIcon className="w-[90px]" />
              <Handle />
            </div>
          </div>

          <div className="flex flex-col gap-6 px-6">
            {SideBarLinks.map((link) => (
              <Link
                href={link.path}
                key={link.id}
                className={`${
                  pathname.includes(link.path) ? "bg-white rounded-md" : ""
                } text-[12px] lg:text-[14px]`}
              >
                <div className="flex items-center gap-1.5 py-2 px-2.5">
                  {
                    <link.icon
                      fill={pathname.includes(link.path) ? "#002561" : "white"}
                    />
                  }
                  <p
                    className={`${
                      pathname.includes(link.path)
                        ? "#text-primary font-medium"
                        : "text-white font-light"
                    }`}
                  >
                    {link.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center gap-4 py-4 px-6 mb-3">
          <button
            //   onClick={() => setLogoutOpen(true)}
            className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-3 py-2.5 lg:py-3 text-[#FE4D4F] text-[12px] lg:text-[14px] mx-6 bg-[#FFFFFF26] rounded-lg w-full"
          >
            <LogoutIcon />
            <p>Logout</p>
          </button>
          <p className="text-[#F5F7FA] text-[10px] font-light w-full pl-3">
            © 2025 Keystone Bank.
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
