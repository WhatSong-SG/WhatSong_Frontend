import { FC } from "react";

const Hamburger: FC = (): JSX.Element => {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="15" height="3" fill="white" />
      <rect y="5" width="15" height="3" fill="white" />
      <rect y="10" width="15" height="3" fill="white" />
    </svg>
  );
};

export default Hamburger;
