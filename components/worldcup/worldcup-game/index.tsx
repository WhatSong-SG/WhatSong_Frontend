import { FC } from "react";
import * as S from "./styles";
import dynamic from "next/dynamic";
import WorldCupGameContainer from "./worldcup-game-container/index";

interface Props {
  genre: any;
}

const TrophyWithNoSSR = dynamic(() => import("../../../public/icon/Trophy"), {
  ssr: false,
});

const WorldCupGame: FC<Props> = ({ genre }) => {
  return (
    <S.DisplayFlexBox>
      <S.HeaderTitleWrapper>
        <h1>Choose Your Song</h1>
        <TrophyWithNoSSR />
      </S.HeaderTitleWrapper>
      <WorldCupGameContainer />
    </S.DisplayFlexBox>
  );
};

export default WorldCupGame;
