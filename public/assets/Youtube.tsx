import { useState } from "react";

const Youtube = ({ color, link }: { color: string; link: string }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <a
      className="navigationIcon"
      href={link}
      target={"_blank"}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="30" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9025 33.942V25.512L35.007 29.742L26.9025 33.942V33.942ZM44.7 24.0525C44.7 24.0525 44.4075 21.984 43.5075 21.0735C42.3675 19.8795 41.088 19.8735 40.5015 19.803C36.3045 19.5 30.006 19.5 30.006 19.5H29.994C29.994 19.5 23.697 19.5 19.4985 19.803C18.912 19.8735 17.634 19.878 16.4925 21.0735C15.5925 21.984 15.3 24.0525 15.3 24.0525C15.3 24.0525 15 26.4795 15 28.908V31.1835C15 33.6105 15.3 36.039 15.3 36.039C15.3 36.039 15.5925 38.106 16.4925 39.0165C17.6325 40.212 19.1325 40.173 19.8 40.299C22.2 40.5285 30 40.599 30 40.599C30 40.599 36.3045 40.59 40.5015 40.287C41.088 40.2165 42.3675 40.212 43.5075 39.0165C44.4075 38.106 44.7 36.039 44.7 36.039C44.7 36.039 45 33.6105 45 31.1835V28.908C45 26.4795 44.7 24.0525 44.7 24.0525V24.0525Z"
          fill={mouseOver ? color : "#545454"}
        />
      </svg>
      <div className="navigationName">Youtube</div>
    </a>
  );
};

export default Youtube;
