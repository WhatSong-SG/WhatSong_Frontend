import { FC, useState, useEffect } from "react";

const Copy: FC = (): JSX.Element => {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0.625H1.5C0.8125 0.625 0.25 1.1875 0.25 1.875V10.625H1.5V1.875H9V0.625ZM10.875 3.125H4C3.3125 3.125 2.75 3.6875 2.75 4.375V13.125C2.75 13.8125 3.3125 14.375 4 14.375H10.875C11.5625 14.375 12.125 13.8125 12.125 13.125V4.375C12.125 3.6875 11.5625 3.125 10.875 3.125ZM10.875 13.125H4V4.375H10.875V13.125Z"
        fill="black"
      />
    </svg>
  );
};

export default Copy;
