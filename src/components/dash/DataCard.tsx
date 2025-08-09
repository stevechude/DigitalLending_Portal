import React from "react";

const DataCard = (card: any) => {
  return (
    <div
      key={card.id}
      style={
        {
          // boxShadow: card.id > 1 ? "0px 0px 3px 1px #ccc" : "none",
        }
      }
      className={`${
        card.id == 1 ? "bgPrimary" : "bg-white shadow-md inset-shadow-2xs"
      } rounded-2xl p-4 w-full md:w-[260px] md:h-[154px]`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p
            className={`${
              card.id == 1 ? "text-white" : "text-[#8C8C8C]"
            } text-xs lg:text-sm`}
          >
            {card.title}
          </p>
          <div
            className={`${
              card.id == 1
                ? "bg-white"
                : card.id == 3
                ? "bg-[#FE4D4F1A]"
                : "bg-[#0025611A]"
            } rounded-full p-2`}
          >
            {card.icon}
          </div>
        </div>
        <p
          className={`${
            card.id == 1 ? "text-white" : "textPrimary"
          } text-3xl font-medium`}
        >
          {card.value}
        </p>
        <div className="flex items-center gap-3">
          {card.percentIcon && (
            <div
              className={`flex items-center gap-1 rounded-full py-0.5 px-1.5 text-[12px] ${
                card.id == 3
                  ? "bg-[#FFEDED] text-[#FE4D4F]"
                  : "bg-[#EEF9E8] text-[#53C31B]"
              }`}
            >
              {card.percentIcon}
              <p className="text-xs">{card.percent}</p>
            </div>
          )}
          <p
            className={`text-[11px] ${
              card.id == 1 ? "text-white" : "text-[#8C8C8C]"
            }`}
          >
            {card.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
