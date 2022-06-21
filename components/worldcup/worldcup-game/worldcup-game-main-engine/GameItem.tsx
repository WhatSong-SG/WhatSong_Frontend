/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import GameImage1 from "../../../../public/icon/GameImage1.png";
import { keyframes, css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { MatchInfoData } from "../../../../module/atom/worldcup/worldcup";

interface Props {
  direction: string;
  setSelectDirection: (value: string) => void;
  win: boolean;
}

const GameItem: FC<Props> = ({ direction, setSelectDirection, win }) => {
  const matchInfoData = useRecoilValue(MatchInfoData);
  const [musicData, setMusicData] = useState({
    name: "",
    artist: "",
    cover: "",
  });

  useEffect(() => {
    if (matchInfoData !== undefined) {
      if (direction === "left") {
        setMusicData(matchInfoData.music1);
      } else if (direction === "right") {
        setMusicData(matchInfoData.music2);
      }
    }
  }, [direction, matchInfoData]);

  return (
    <GameItemBox
      direction={direction}
      win={win}
      onClick={() => {
        setSelectDirection(direction);
      }}
    >
      <img
        src={musicData?.cover}
        style={{ width: "100%", height: "100%" }}
        alt={"music"}
      />
      <div className="text-center">
        <h1>{musicData?.name}</h1>
        <p>{musicData?.artist}</p>
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
