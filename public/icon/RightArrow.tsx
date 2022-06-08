import { FC, useState, useEffect } from "react";

const RightArrow: FC = (): JSX.Element => {
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
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.29384 0.975344C1.06851 1.15426 0.889742 1.36678 0.767768 1.60073C0.645793 1.83469 0.583008 2.08548 0.583008 2.33877C0.583008 2.59205 0.645793 2.84285 0.767768 3.0768C0.889742 3.31076 1.06851 3.52328 1.29384 3.70219L10.7249 11.2059L1.29384 18.7095C0.839363 19.0711 0.584037 19.5616 0.584037 20.0729C0.584037 20.5843 0.839363 21.0748 1.29384 21.4364C1.74833 21.798 2.36474 22.0011 3.00747 22.0011C3.65021 22.0011 4.26662 21.798 4.7211 21.4364L15.8779 12.5596C16.1032 12.3807 16.282 12.1682 16.404 11.9342C16.526 11.7003 16.5887 11.4495 16.5887 11.1962C16.5887 10.9429 16.526 10.6921 16.404 10.4582C16.282 10.2242 16.1032 10.0117 15.8779 9.83277L4.7211 0.956004C3.79744 0.221109 2.24181 0.221109 1.29384 0.975344Z"
        fill="#9B9B9B"
      />
    </svg>
  );
};

export default RightArrow;
