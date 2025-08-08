"use client";
import DocumentIcon from "@/assets/DocumentIcon";
import GreenTrendUp from "@/assets/GreenTrendUp";
import RedTrend from "@/assets/RedTrend";
import WalletMoneyIcon from "@/assets/WalletMoneyIcon";
import DataCard from "@/components/dash/DataCard";
import TitleContainer from "@/components/reusable/TitleContainer";
import React, { useEffect, useRef, useState } from "react";

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
      <p>Dashboard</p>
    </div>
  );
};

export default Dashboard;
