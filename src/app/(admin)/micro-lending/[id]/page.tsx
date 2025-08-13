"use client";
import DocUploadIcon from "@/assets/DocUploadIcon";
import { MicroRows } from "@/lib/micro-dummy";
import { loanDeets } from "@/lib/random";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const LoanDetails = () => {
  const path = usePathname();
  const id = path?.substring(path.lastIndexOf("/") + 1);
  const router = useRouter();

  const loanDetails = MicroRows.find((loan) => loan.loanId === id);
  //   console.log("loan deets=", loanDetails)

  const middleDetails = [
    {
      id: 1,
      title: "Date Initiated",
      value: loanDetails?.dateInitiated,
    },
    {
      id: 2,
      title: "Date Date",
      value: loanDetails?.dueDateTime,
    },
    {
      id: 3,
      title: "Loan Amount",
      value: loanDetails?.amount,
    },
    {
      id: 4,
      title: "Total Repayment",
      value: "₦120,000.00",
    },
    {
      id: 5,
      title: "Interest Rate",
      value: "5% per Month",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 md:gap-3 lg:gap-5">
          <button
            onClick={() => router.back()}
            className="bg-[#F0F2F5] rounded-full p-1.5 md:p-2 lg:p-2.5 h-fit cursor-pointer hover:bg-[#F0F2F5]/80 hover:shadow"
          >
            <FaAngleLeft />
          </button>
          <div className="flex flex-col">
            <h1 className="textPrimary text-base md:text-xl lg:text-2xl font-medium">
              Loan Details
            </h1>
            <p className="textSecondary text-xs md:text-sm">
              Review today's loan activity and insights.
            </p>
          </div>
        </div>
        <p className="text-white bg-[#2CC974] rounded-4xl text-xs md:text-sm lg:text-base p-1.5 md:px-3.5 lg:p-2 lg:px-5">
          Repaid
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-[16px]">Loan ID:</p>
            <p className="text-[15px] text-[#8C8C8C]">LN001234567</p>
          </div>
          <button className="bgPrimary text-white px-3 py-2 rounded-[50px] text-sm flex items-center gap-2">
            <DocUploadIcon />
            <p>Download Offer Letter</p>
          </button>
        </div>
        <div className="bg-[#A3D8F50D] rounded-3xl border border-[#A3D8F5]">
          <div className="px-2 md:px-3.5 lg:px-5 py-9 flex items-center justify-between flex-wrap gap-2">
            {middleDetails?.map((deets) => (
              <div key={deets.id} className="flex flex-col gap-1 lg:gap-2">
                <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
                  {deets.title}
                </p>
                <p
                  className={`px-2 py-1.5 rounded-4xl text-[11px] lg:text-[12px] text-center ${
                    deets.id == 5
                      ? "bg-[#FF9D0026] text-[#FF9D00]"
                      : "border border-[#A3D8F5]"
                  }`}
                >
                  {deets.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-between">
        <div className="flex items-center gap-2 w-[257px]">
          <div className="w-[60px] h-[60px] rounded-full">
            <Image
              src={loanDeets.userPhoto}
              alt="User Photo"
              width={500}
              height={500}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#0D205E] text-xs md:text-sm lg:text-[16px]">
              {loanDeets?.lastName}, {loanDeets?.firstName}{" "}
              {loanDeets?.middleName}
            </p>
            <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
              {loanDeets?.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 lg:w-[114px] w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">Duration</p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.duration}
          </p>
        </div>
        <div className="flex flex-col gap-1 lg:w-[114px] w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
            Loan Status
          </p>
          <p className="px-2 lg:px-5 py-1.5 rounded-4xl text-[11px] bg-[#2CC97426] text-[#2CC974] w-fit border border-[#A3D8F5] text-xs md:text-sm lg:text-[13px]">
            {loanDeets?.loanStatus}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">BVN</p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.bvn}
          </p>
        </div>
        <div className="flex flex-col gap-1 lg:w-[114px] w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
            Account Number
          </p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.accNumber}
          </p>
        </div>
        <div className="flex flex-col gap-1 lg:w-[114px] w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
            Loan Purpose
          </p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.loanPurpose}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
            Applicant Address
          </p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.address}
          </p>
        </div>
        <div className="flex flex-col gap-1 lg:w-[114px] w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
            Phone number
          </p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.phone}
          </p>
        </div>
        <div className="flex flex-col gap-1 lg:w-[114px] w-[257px]">
          <p className="text-[12px] lg:text-[14px] text-[#8C8C8C]">
            Date of Birth
          </p>
          <p className="text-[#0D205E] text-xs md:text-sm lg:text-[15px]">
            {loanDeets?.dob}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
