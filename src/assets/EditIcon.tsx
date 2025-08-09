import React from "react";

const EditIcon = ({ stroke }: any) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5H15C20 22.5 22 20.5 22 15.5V13.5"
        stroke={stroke || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.04 3.51999L8.16 11.4C7.86 11.7 7.56 12.29 7.5 12.72L7.07 15.73C6.91 16.82 7.68 17.58 8.77 17.43L11.78 17C12.2 16.94 12.79 16.64 13.1 16.34L20.98 8.45999C22.34 7.09999 22.98 5.51999 20.98 3.51999C18.98 1.51999 17.4 2.15999 16.04 3.51999Z"
        stroke={stroke || "white"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.91 4.64999C15.58 7.03999 17.45 8.90999 19.85 9.58999"
        stroke={stroke || "white"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
