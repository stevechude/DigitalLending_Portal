import { usePathname } from "next/navigation";
import React from "react";

const PageTitle = () => {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.includes("dashboard")) return "Dashboard";
    if (pathname.includes("micro-lending")) return "Micro Lending";
    if (pathname.includes("salad")) return "Salary Advance Loan and Deposit";
    if (pathname.includes("reports")) return "Reports";
    if (pathname.includes("audit-trail")) return "Audit Trail";
  };

  const title = getTitle();

  return (
    <div className="hidden lg:block">
      <p className="text-[#002561] font-medium xl:text-lg">{title}</p>
    </div>
  );
};

export default PageTitle;
