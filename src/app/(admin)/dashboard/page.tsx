"use client";
import DocumentIcon from "@/assets/DocumentIcon";
import GreenTrendUp from "@/assets/GreenTrendUp";
import RedTrend from "@/assets/RedTrend";
import WalletMoneyIcon from "@/assets/WalletMoneyIcon";
import DataCard from "@/components/dash/DataCard";
import LoanChart from "@/components/dash/LoanChart";
import TitleContainer from "@/components/reusable/TitleContainer";
import { ChartData } from "@/lib/dummy-chart";
import { TableHeaders, TableRows } from "@/lib/random";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Dashboard = () => {
  const [calendar, setCalendar] = useState("");
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const current = 45.2; // in millions
  const target = 50.0; // in millions

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Simulate loading animation after mount
    const timeout = setTimeout(() => {
      setPercentage((current / target) * 100);
    }, 100);

    return () => clearTimeout(timeout);
  }, [current, target]);

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
      title: "Successful Loans",
      value: "1,200",
      icon: <WalletMoneyIcon />,
      percent: "12,87%",
      percentIcon: <GreenTrendUp />,
      info: "than last month",
    },
    {
      id: 3,
      title: "Failed Loans",
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

  const capsData = [
    {
      id: 1,
      title: "Daily Cap",
      value: `₦33,712`,
    },
    {
      id: 2,
      title: "Actual",
      value: `₦33,712`,
    },
    {
      id: 3,
      title: "Total Loan",
      value: `₦33,712`,
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
      <TitleContainer
        title="Dashboard"
        subTitle="Manage and analyze customer data effectively."
        calendarRef={calendarRef}
        calendar={calendar}
        setCalendar={setCalendar}
      />
      <div className="flex items-center justify-between flex-wrap gap-4">
        {dashboardCards.map((card) => (
          <DataCard key={card.id} {...card} />
        ))}
      </div>
      <div className="flex flex-col gap-6 text-[14px]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-[#F1F7FD] rounded-4xl px-2 py-1.5">
            <WalletMoneyIcon />
            <p className="text-[#15171C]">Daily Loan Cap & Variance</p>
          </div>
          <input
            type="date"
            name=""
            id=""
            className="border border-[#E0E0E0] rounded-md p-1"
          />
        </div>
        <div className="flex items-center justify-between">
          {capsData.map((cap) => (
            <div
              key={cap.id}
              className="flex items-center justify-between w-[336px]"
            >
              <div className="flex flex-col gap-2">
                <p className="text-[16px] text-[#131B33] font-medium">
                  {cap.value}
                </p>
                <p className="text-[10px] text-[#666666]">{cap.title}</p>
              </div>
              <div className="w-[1px] h-[50px] bg-[#E3EFFC]" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] text-[#15171C]">Today’s Cap Progress</p>
            <div className="bg-[#06943F] text-white text-[16px] rounded-4xl px-2 py-1.5">
              <p>₦45.2M / ₦50.0M</p>
            </div>
          </div>
          <div className="w-full h-[5px] bg-[#E3EFFC] rounded-[6px]">
            <div
              style={{ width: `${percentage}%` }}
              className="bg-[#009FE3] h-full rounded-[6px] transition-[width] duration-700 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:gap-6">
        <h3 className="text-[18px] text-[#15171C] font-medium">Recent Loans</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#F5F7FA] rounded-[100px] max-w-[268px] w-full">
            <CiSearch className="ml-3" />
            <input
              type="text"
              placeholder="Search Recent Loans"
              className="bg-transparent outline-none py-2.5 rounded-[100px] placeholder:textSecondary text-[#15171C] text-[14px]"
            />
          </div>
          <button className="bgPrimary text-white px-4 py-2 rounded-[50px] text-sm">
            View All
          </button>
        </div>
        {/* table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#F5F7FA]">
                {TableHeaders.map((header) => (
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
              {TableRows?.length <= 0 ? (
                <tr>
                  <td
                    colSpan={TableHeaders.length}
                    className="text-center py-4"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                TableRows?.slice(0, 5).map((row, index) => (
                  <tr
                    key={index}
                    className={`border border-[#F5F7FA] rounded-[1px] text-[#131B33] text-[12px] lg:text-[14px] bg-white`}
                  >
                    <td className="px-4 lg:px-4 py-4">{row?.loanId}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.customer}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.amount}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.accountNum}</td>
                    <td className="px-4 lg:px-4 py-4">{row?.dateTime}</td>
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
      <div className="w-full">
        <p className="text-[16px] text-[#000000] font-medium">
          Loan Performance
        </p>
        <LoanChart data={ChartData} />
      </div>
    </div>
  );
};

export default Dashboard;
