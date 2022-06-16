/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import * as S from "./style";
import GameImage1 from "../../../public/icon/GameImage1.png";
import Lists from "../../Gerne/Lists";
import { useRecoilValue } from "recoil";
import { TournamentId } from "../../../module/atom/worldcup/worldcup";
import { getfinalWinner } from "../../../utils/api/Worldcup";
import { FinalWinnerType } from "../../../interface/WorldCup";

interface Props {
  gener: string | string[] | undefined;
}

const WorldCupFinal: FC<Props> = ({ gener }) => {
  const List = [1, 2, 3, 4, 5, 6];
  const tournamentId = useRecoilValue(TournamentId);
  const [finalInfo, setFinalInfo] = useState<FinalWinnerType>({
    name: "",
    cover: "",
    artist: "",
  });

  useEffect(() => {
    getfinalWinner(tournamentId)
      .then((res) => setFinalInfo(res))
      .catch((err) => console.log(err));
  }, [tournamentId]);

  return (
    <S.Main>
      <h1>Final Round</h1>
      <S.MiddleFlexBox>
        <div className="finalImageWrapper">
          <img src={finalInfo?.cover} alt="FinalImage" />
          <div className="music-title-artist-center">
            <h1>{finalInfo?.name}</h1>
            <p>{finalInfo?.artist}</p>
          </div>
        </div>
        <S.ListWrapper>
          {List.map((el, index) => {
            return <Lists key={index}>{el}</Lists>;
          })}
        </S.ListWrapper>
      </S.MiddleFlexBox>
    </S.Main>
  );
};

export default WorldCupFinal;
