import { useRouter } from "next/router";
import { useState } from "react";

const Facebook = ({ color, url }: { color: string; url: string }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const router = useRouter();

  console.log(router.pathname);
  return (
    <a
      className="navigationIcon"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      target="_blank"
      href={`http://www.facebook.com/sharer/sharer.php?u=${url}`}
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 30.1005C12 39.0495 18.4995 46.491 27 48V34.9995H22.5V30H27V25.9995C27 21.4995 29.8995 19.0005 34.0005 19.0005C35.2995 19.0005 36.7005 19.2 37.9995 19.3995V24H35.7C33.4995 24 33 25.0995 33 26.5005V30H37.8L37.0005 34.9995H33V48C41.5005 46.491 48 39.051 48 30.1005C48 20.145 39.9 12 30 12C20.1 12 12 20.145 12 30.1005Z"
          fill={mouseOver ? color : "#545454"}
        />
      </svg>
      <div className="navigationName">Facebook</div>
    </a>
  );
};

export default Facebook;
