"use client";
import LogoutIcon from "@/assets/LogoutIcon";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiAngleDown, TfiMenuAlt } from "react-icons/tfi";
import { CgCloseR } from "react-icons/cg";
import { SideBarLinks } from "@/lib/links";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import PageTitle from "../PageTitle";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <div className="flex bg-white w-full max-h-[80px] h-[80px] lg:h-[90px] border-b border-[#F0F0F0]">
      <div className="w-full flex items-center justify-between px-2 lg:px-4">
        <button
          onClick={() => setOpenMenu(true)}
          className="lg:hidden flex items-center"
        >
          <TfiMenuAlt size={23} color="#002561" />
        </button>

        <AnimatePresence>
          {openMenu && (
            <motion.section
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 2 }}
              style={{ backgroundColor: "#002561" }}
              className="fixed left-0 w-60 h-[100vh] top-0 flex flex-col justify-between z-10"
            >
              <div className="flex flex-col gap-3">
                <CgCloseR
                  onClick={() => setOpenMenu(false)}
                  size={28}
                  color="#fff"
                  className="flex items-center self-end mt-1 mr-3"
                />

                <div className="flex flex-col gap-4 px-4 text-xs">
                  {SideBarLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenu(false);
                        setTimeout(() => {
                          navigate.push(link.path);
                        }, 500);
                      }}
                      className={`${
                        pathname.includes(link.path)
                          ? "bg-white rounded-md"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-1.5 py-2 px-2.5">
                        {
                          <link.icon
                            fill={
                              pathname.includes(link.path) ? "#002561" : "white"
                            }
                          />
                        }
                        <p
                          className={`${
                            pathname.includes(link.path)
                              ? "#text-primary"
                              : "text-white"
                          }`}
                        >
                          {link.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 py-4 px-6 mb-3">
                <button
                  //   onClick={() => setLogoutOpen(true)}
                  className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-3 py-2.5 lg:py-3 text-[#FE4D4F] text-[12px] mx-6 bg-[#FFFFFF26] rounded-lg w-full"
                >
                  <LogoutIcon />
                  <p>Logout</p>
                </button>
                <p className="text-[#F5F7FA] text-[10px] font-light w-full pl-3">
                  © 2025 Keystone Bank.
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <PageTitle />

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="bg-white border border-[#F0F0F0] rounded-full hover:bg-[#F5F5F5]">
            <button className="p-3 relative cursor-pointer ">
              <IoIosNotificationsOutline size={28} />
              {/* <div className="bg-[#F74A4A] absolute top-2.5 right-2 lg:right-3 rounded-full flex items-center justify-center text-xs text-white">
                <p className="px-1">6</p>
              </div> */}
            </button>
          </div>

          {/* user deets */}
          <div className="bg-[#F5F5F5] hover:border hover:border-[#98a2b3] rounded-[49px] flex items-center w-[200px] lg:w-[245px]">
            <button
              //   onClick={goToProfile}
              className="flex items-center justify-between w-full px-2 md:px-3 py-2 md:py-2.5 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src="/user.png"
                    alt="user image"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-black font-medium text-[12px] truncate">
                    Temitayo Bankole
                  </p>
                  <p className="text-[#595959] text-[10px] lg:text-xs">Admin</p>
                </div>
              </div>
              <TfiAngleDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
