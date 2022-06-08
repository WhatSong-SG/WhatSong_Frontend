import { FC, useState, useEffect } from "react";

const LeftArrow: FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => removeEventListener("resize", () => {});
  }, []);

  return (
    <svg
      width={windowWidth <= 1409 ? "10" : "17"}
      height={windowWidth <= 1409 ? "21" : "21"}
      viewBox="0 0 17 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7062 21.4368C15.9315 21.2579 16.1103 21.0453 16.2322 20.8114C16.3542 20.5774 16.417 20.3266 16.417 20.0733C16.417 19.8201 16.3542 19.5693 16.2322 19.3353C16.1103 19.1014 15.9315 18.8888 15.7062 18.7099L6.27514 11.2063L15.7062 3.70258C16.1606 3.34098 16.416 2.85054 16.416 2.33916C16.416 1.82778 16.1606 1.33733 15.7062 0.975731C15.2517 0.614129 14.6353 0.410986 13.9925 0.410986C13.3498 0.410986 12.7334 0.614129 12.2789 0.975732L1.1221 9.8525C0.89677 10.0314 0.718 10.2439 0.596025 10.4779C0.47405 10.7118 0.411268 10.9626 0.411268 11.2159C0.411268 11.4692 0.47405 11.72 0.596025 11.954C0.718 12.1879 0.89677 12.4004 1.1221 12.5793L12.2789 21.4561C13.2026 22.191 14.7582 22.191 15.7062 21.4368Z"
        fill="#9B9B9B"
      />
    </svg>
  );
};

export default LeftArrow;
