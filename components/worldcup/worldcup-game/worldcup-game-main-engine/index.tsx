import { FC } from "react";
import * as S from "./style";
import GameItemBox from "./GameItem";

interface Props {}

const WorldCupGameMainEngine: FC<Props> = () => {
  return (
    <S.MainContainer>
      <GameItemBox />
      <b>Vs</b>
      <GameItemBox />
    </S.MainContainer>
  );
};

export default WorldCupGameMainEngine;
