import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import GameImage1 from "../../../../public/icon/GameImage1.png";
import { keyframes, css } from "@emotion/react";

interface Props {
  direction: string;
  setSelectDirection: (value: string) => void;
  win: boolean;
}

const GameItem: FC<Props> = ({ direction, setSelectDirection, win }) => {
  return (
    <GameItemBox
      direction={direction}
      win={win}
      onClick={() => {
        setSelectDirection(direction);
      }}
    >
      <Image
        src={GameImage1}
        quality={100}
        objectFit="contain"
        placeholder="blur"
        alt="게임 사진"
      />
      <div className="text-center">
        <h1>Starboy</h1>
        <p>The Weekend</p>
      </div>
    </GameItemBox>
  );
};

const winnerLeftAnimation = keyframes`
  0% {
    transform: translate(-50%);
  }
  100% {
    transform: translate(0%);
  }
`;
const winnerLightAnimation = keyframes`
  0% {
    transform: translate(50%);
  }
  100% {
    transform: translate(0%);
  }
`;

const GameItemBox = styled.div<{ win: boolean; direction: string }>`
  width: clamp(360px, 50%, 750px);
  cursor: pointer;
  aspect-ratio: 1/1;
  position: relative;
  transition: 0.2s;

  ${(props) =>
    props.win &&
    props.direction === "left" &&
    css`
      animation: ${winnerLeftAnimation} linear 0.386s;
    `};

  ${(props) =>
    props.win &&
    props.direction === "right" &&
    css`
      animation: ${winnerLightAnimation} linear 0.386s;
    `};

  .text-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 6.2rem;
    left: 50%;
    transform: translate(-50%);
    margin: 0;
  }

  .text-center > h1 {
    color: #ffffff;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    margin: 0;
  }

  .text-center > p {
    color: #ffffff;
    font-weight: 100;
    font-family: "Poppins", sans-serif;
    font-size: 1.9rem;
    margin: 0;
  }
`;

export default GameItem;
