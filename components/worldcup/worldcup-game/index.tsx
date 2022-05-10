import { FC } from "react";
import * as S from "./styles";
import dynamic from "next/dynamic";

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
        <h1>Choose Your {genre}</h1>
        <TrophyWithNoSSR />
      </S.HeaderTitleWrapper>
    </S.DisplayFlexBox>
  );
};

export default WorldCupGame;
