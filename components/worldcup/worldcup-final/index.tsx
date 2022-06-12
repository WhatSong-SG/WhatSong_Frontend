/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import * as S from "./style";
import GameImage1 from "../../../public/icon/GameImage1.png";

interface Props {
  gener: string | string[] | undefined;
}

const WorldCupFinal: FC<Props> = ({ gener }) => {
  console.log(gener);
  return (
    <S.Main>
      <h1>Final Round</h1>
      <S.MiddleFlexBox>
        <div className="finalImageWrapper">
          <img src={GameImage1.src} alt="FinalImage" />
          <div className="music-title-artist-center">
            <h1>Starboy</h1>
            <p>The Weekend</p>
          </div>
        </div>
      </S.MiddleFlexBox>
    </S.Main>
  );
};

export default WorldCupFinal;
