import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import GameImage1 from "../../../../public/icon/GameImage1.png";

interface Props {}

const GameItem: FC<Props> = () => {
  return (
    <GameItemBox>
      <Image
        src={GameImage1}
        quality={100}
        objectFit="contain"
        placeholder="blur"
        alt="게임 사진"
      />
    </GameItemBox>
  );
};

const GameItemBox = styled.div`
  width: 46%;
  height: 44%;
  cursor: pointer;
`;

export default GameItem;
