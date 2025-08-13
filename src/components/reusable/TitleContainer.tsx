import { LuCalendarDays } from "react-icons/lu";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditIcon from "@/assets/EditIcon";
import { usePathname } from "next/navigation";
import { Modal } from "../modal/Modal";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import EditInterest from "../dash/EditInterest";
import CardSuccessful from "./CardSuccessful";

type Props = {
  title: string;
  subTitle: string;
  calendarRef: React.RefObject<HTMLDivElement | null>;
  calendar: any;
  setCalendar: (dt: string) => void;
};

const TitleContainer = ({
  title,
  subTitle,
  calendarRef,
  calendar,
  setCalendar,
}: Props) => {
  const [openDate, setOpenDate] = useState(false);
  const [openInterestRate, setOpenInterestRate] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setCalendar(format(new Date(), "MMMM-yyyy"));

    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, [calendarRef]);

  const handleSelectDate = (date: any) => {
    setCalendar(format(date, "MMMM-yyyy"));
    setOpenDate(false);
  };

  //   hide date on ESC press
  const hideOnEscape = (e: any) => {
    if (e.key === "Escape") setOpenDate(false);
  };

  //   hide date on click outside
  const hideOnClickOutside = (e: any) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(e.target as Node)
    ) {
      setOpenDate(false);
    }
  };

  const handleModalCards = () => {
    setOpenInterestRate(false);
    setShowDone((prev) => !prev);
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
              {title}
            </p>
            <p className="text-xs lg:text-sm textSecondary">{subTitle}</p>
          </div>

          <div className="flex items-center flex-wrap gap-2 lg:gap-3">
            <div className="relative">
              <div
                onClick={() => setOpenDate(!openDate)}
                className="flex items-center gap-2 justify-between border border-[#F0F0F0] rounded-[50px] px-3 py-2 cursor-pointer max-w-[200px]"
              >
                <LuCalendarDays size={18} color="#000" />
                <input
                  type="text"
                  value={calendar}
                  readOnly
                  title={calendar}
                  className="text-end bg-white outline-none text-xs md:text-sm w-[105px] truncate cursor-pointer"
                />
              </div>
              {openDate && (
                <div ref={calendarRef} className="absolute right-0 top-10 z-10">
                  <DatePicker
                    selected={calendar}
                    onChange={handleSelectDate}
                    dateFormat="MMMM-yyyy"
                    showMonthYearPicker
                    inline
                  />
                </div>
              )}
            </div>

            {pathname.includes("dashboard") && (
              <button
                onClick={() => setOpenInterestRate(!openInterestRate)}
                className="flex items-center gap-3 bgPrimary rounded-3xl px-2 lg:px-3 py-1.5 text-xs md:text-sm cursor-pointer text-white"
              >
                <EditIcon />
                <p>Edit Interest Rate</p>
              </button>
            )}
          </div>
        </div>
      </div>
      {openInterestRate && (
        <Modal
          show={openInterestRate}
          onClose={() => setOpenInterestRate(false)}
        >
          <EditInterest
            onUpdate={handleModalCards}
            cancel={() => setOpenInterestRate(false)}
          />
        </Modal>
      )}
      {showDone && (
        <Modal show={showDone} onClose={() => setShowDone(false)}>
          <CardSuccessful
            close={() => setShowDone(false)}
            header="Request Successful"
            description="Interest Rate Updated Successfully"
          />
        </Modal>
      )}
    </>
  );
};

export default TitleContainer;
