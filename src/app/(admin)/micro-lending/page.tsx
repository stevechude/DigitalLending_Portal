"use client";
import DocUploadIcon from "@/assets/DocUploadIcon";
import EditIcon from "@/assets/EditIcon";
import TitleContainer from "@/components/reusable/TitleContainer";
import { MicroHeaders, MicroRows } from "@/lib/micro-dummy";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const MicroLending = () => {
  const [calendar, setCalendar] = useState("");
  const calendarRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
      <TitleContainer
        title="Micro-lending"
        subTitle="Manage and analyze Micro-lending data effectively."
        calendarRef={calendarRef}
        calendar={calendar}
        setCalendar={setCalendar}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-[#F5F7FA] rounded-[100px] max-w-[268px] w-full">
          <CiSearch className="ml-3" />
          <input
            type="text"
            placeholder="Search history here"
            className="bg-transparent outline-none py-2.5 rounded-[100px] placeholder:textSecondary text-[#15171C] text-[14px]"
          />
        </div>
        <div className="flex items-center flex-wrap gap-2 lg:gap-3">
          <button className="bgPrimary text-white px-3 py-1.5 rounded-[50px] text-sm flex items-center gap-2">
            <DocUploadIcon />
            <p>Download CRMS file</p>
          </button>
          <button className="flex items-center gap-2 bg-[#F5F7FA] rounded-[100px] px-2 lg:px-3 py-1.5 text-xs md:text-sm cursor-pointer text-[#131B33]">
            <EditIcon stroke="#002561" />
            <p>Edit Interest Rate</p>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#F5F7FA]">
              {MicroHeaders.map((header) => (
                <th
                  key={header.key}
                  className={`text-left px-4 py-3 font-semibold text-[#131B33] text-[14px] lg:text-[15px] ${
                    header.key === "loanId" ? "rounded-l-[14px]" : ""
                  }`}
                >
                  {header.label}
                </th>
              ))}
              <th className="px-4 py-3 rounded-r-[14px]"></th>
            </tr>
          </thead>
          <tbody>
            {MicroRows?.length <= 0 ? (
              <tr>
                <td colSpan={MicroHeaders.length} className="text-center py-4">
                  No data available
                </td>
              </tr>
            ) : (
              MicroRows?.map((row, index) => (
                <tr
                  key={index}
                  className={`border border-[#F5F7FA] rounded-[1px] text-[#131B33] text-[12px] lg:text-[14px] bg-white`}
                >
                  <td className="px-4 lg:px-4 py-4">{row?.loanId}</td>
                  <td className="px-4 lg:px-4 py-4">{row?.customer}</td>
                  <td className="px-4 lg:px-4 py-4">{row?.amount}</td>
                  <td className="px-4 lg:px-4 py-4">{row?.accountNum}</td>
                  <td className="px-4 lg:px-4 py-4">{row?.dateInitiated}</td>
                  <td className="px-4 lg:px-4 py-4">{row?.dueDateTime}</td>
                  <td className={`px-4 lg:px-4 py-4`}>
                    <span
                      className={`${
                        (row?.status === "Repaid" ||
                          row?.status === "Successful") &&
                        "text-[#00C566] bg-[#E6F9F0]"
                      } ${
                        row?.status === "Overdue" &&
                        "bg-[#FE4D4F1A] text-[#FE4D4F]"
                      } ${
                        row?.status === "Disbursed" &&
                        "text-[#002561] bg-[#E8F5FD]"
                      } ${
                        row?.status === "Running" &&
                        "text-[#FF9D00] bg-[#FF9D001A]"
                      } rounded-[50px] p-1.5 px-2 w-20 inline-block text-center`}
                    >
                      {row?.status}
                    </span>
                  </td>
                  <td>
                    <button className="text-[#009FE3] text-[12px] lg:text-[14px] cursor-pointer hover:underline">
                      View more
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MicroLending;
