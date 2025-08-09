"use client";
import DocumentIcon from "@/assets/DocumentIcon";
import DocUploadIcon from "@/assets/DocUploadIcon";
import GreenTrendUp from "@/assets/GreenTrendUp";
import RedTrend from "@/assets/RedTrend";
import WalletMoneyIcon from "@/assets/WalletMoneyIcon";
import DataCard from "@/components/dash/DataCard";
import TitleContainer from "@/components/reusable/TitleContainer";
import { ReportsHeaders, ReportsRows } from "@/lib/reports-dummy";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Reports = () => {
  const [calendar, setCalendar] = useState("");
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const dashboardCards = [
    {
      id: 1,
      title: "Total Loans Booked",
      value: "2,827",
      icon: <DocumentIcon fill="#002561" className="w-4 h-4" />,
      percent: "15.50%",
      percentIcon: <GreenTrendUp />,
      info: "than last month",
    },
    {
      id: 2,
      title: "Successful Disbursements",
      value: "1,200",
      icon: <WalletMoneyIcon />,
      percent: "12,87%",
      percentIcon: <GreenTrendUp />,
      info: "than last month",
    },
    {
      id: 3,
      title: "Failed Disbursements",
      value: "98",
      icon: <WalletMoneyIcon />,
      percent: "8.35%",
      percentIcon: <RedTrend />,
      info: "than last month",
    },
    {
      id: 4,
      title: "Success Rate",
      value: "89.6%",
      icon: <WalletMoneyIcon />,
      info: "Disbursement rate",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
      <TitleContainer
        title="Report"
        subTitle="Insights on loan performance and trends."
        calendarRef={calendarRef}
        calendar={calendar}
        setCalendar={setCalendar}
      />
      <div className="flex items-center justify-between flex-wrap gap-4">
        {dashboardCards.map((card) => (
          <DataCard key={card.id} {...card} />
        ))}
      </div>
      <div className="flex flex-col gap-4 lg:gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#F5F7FA] rounded-[100px] max-w-[268px] w-full">
            <CiSearch className="ml-3" />
            <input
              type="text"
              placeholder="Search Recent Loans"
              className="bg-transparent outline-none py-2.5 rounded-[100px] placeholder:textSecondary text-[#15171C] text-[14px]"
            />
          </div>
          <button className="bgPrimary text-white px-3 py-1.5 rounded-[50px] text-sm flex items-center gap-2">
            <DocUploadIcon />
            <p>Export as Excel</p>
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#F5F7FA]">
                {ReportsHeaders.map((header) => (
                  <th
                    key={header.key}
                    className={`text-left px-4 py-3 font-semibold text-[#131B33] text-[14px] lg:text-[15px] ${
                      header.key === "loanId" ? "rounded-l-[14px]" : ""
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ReportsRows?.length <= 0 ? (
                <tr>
                  <td
                    colSpan={ReportsHeaders.length}
                    className="text-center py-4"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                ReportsRows?.map((row, index) => (
                  <tr
                    key={index}
                    className={`border border-[#F5F7FA] rounded-[1px] text-[#131B33] text-[12px] lg:text-[14px] bg-white`}
                  >
                    <td className="px-4 lg:px-4 py-4">{row?.loanId}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.customer}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.amount}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.accountNum}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.dueDateTime}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.productType}</td>
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
