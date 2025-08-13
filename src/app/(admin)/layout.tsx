import Header from "@/components/navigation/Header";
import SideBar from "@/components/navigation/SideBar";
import React from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="bg-[#fcfcfc] h-full w-full p-2 md:py-[15px] md:px-[21px] lg:px-7 lg:py-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
