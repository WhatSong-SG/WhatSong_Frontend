import { FC } from "react";
import * as S from "./style";
import WorldCupTitleWrapper from "./WorldCupTitleData";
import WorldCupGameMainEngine from "../worldcup-game-main-engine/index";

interface Props {}

const WorldCupGameContainer: FC<Props> = () => {
  return (
    <S.Main>
      <WorldCupTitleWrapper />
      <WorldCupGameMainEngine />
    </S.Main>
  );
};

export default WorldCupGameContainer;
