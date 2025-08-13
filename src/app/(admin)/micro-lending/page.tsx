"use client";
import DocUploadIcon from "@/assets/DocUploadIcon";
import EditIcon from "@/assets/EditIcon";
import TitleContainer from "@/components/reusable/TitleContainer";
import { MicroHeaders, MicroRows } from "@/lib/micro-dummy";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ReactPaginate from "react-paginate";

const MicroLending = () => {
  const [calendar, setCalendar] = useState("");
  const [showingNumber, setShowingNumber] = useState(0);
  const [itemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = MicroRows?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(MicroRows.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % MicroRows.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (MicroRows.length > 10) {
      setShowingNumber(10);
    } else if (MicroRows.length <= 10) {
      setShowingNumber(itemsPerPage);
    }
  }, [MicroRows]);

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
      <div className="overflow-x-auto w-full flex flex-col gap-1">
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
              currentItems?.map((row, index) => (
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
                    <Link
                      href={`/micro-lending/${row?.loanId}`}
                      className="text-[#009FE3] text-[12px] lg:text-[14px] cursor-pointer hover:underline"
                    >
                      View more
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="flex items-center w-full justify-between flex-wrap">
          <div className="bg-[#F5F7FA] rounded-3xl flex items-center text-xs md:text-sm">
            <div className="px-2 py-1.5 lg:px-3 lg:py-2 flex items-center gap-2">
              <p className="text-[#131B33]">Showing 1 - {showingNumber} of</p>
              <div className="bgPrimary rounded-3xl text-white">
                <p className="px-1.5 py-0.5 md:px-2 md:py-1">
                  {MicroRows.length}
                </p>
              </div>
            </div>
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="Prev"
            containerClassName="paginationContainer"
            activeClassName="paginationActive"
            pageClassName="eachElem"
            previousLinkClassName="prevBtnClass"
            nextLinkClassName="nexBtnClass"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default MicroLending;
