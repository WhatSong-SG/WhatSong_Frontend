import { FC } from "react";
import * as S from "./style";
import WorldCupTitleWrapper from "./WorldCupTitleData";
import WorldCupGameMainEngine from "../worldcup-game-main-engine/index";

interface Props {
  isRoundModalOpen: boolean;
}

const WorldCupGameContainer: FC<Props> = ({ isRoundModalOpen }) => {
  return (
    <S.Main>
      {isRoundModalOpen === false && (
        <>
          <WorldCupTitleW rapper />
          <WorldCupGameMainEngine />
        </>
      )}
    </S.Main>
  );
};

export default WorldCupGameContainer;
