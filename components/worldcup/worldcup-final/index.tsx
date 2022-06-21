/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import * as S from "./style";
import GameImage1 from "../../../public/icon/GameImage1.png";
import Lists from "../../Gerne/Lists";
import { useRecoilValue } from "recoil";
import { TournamentId } from "../../../module/atom/worldcup/worldcup";
import { getFinalWinner } from "../../../utils/api/Worldcup";
import {
  FinalRankListType,
  FinalWinnerType,
} from "../../../interface/WorldCup";
import { getFinalRank } from "../../../utils/api/Worldcup";
import FinalRankLists from "./FinalRankLists";

interface Props {
  gener: string | string[] | undefined;
}

const WorldCupFinal: FC<Props> = ({ gener }) => {
  const tournamentId = useRecoilValue(TournamentId);
  const [finalInfo, setFinalInfo] = useState<FinalWinnerType>({
    name: "",
    cover: "",
    artist: "",
  });
  const [rankLists, setRankLists] = useState<Array<FinalRankListType>>();

  useEffect(() => {
    getFinalWinner(tournamentId)
      .then((res) => setFinalInfo(res))
      .catch((err) => console.log(err));
  }, [tournamentId]);

  useEffect(() => {
    getFinalRank()
      .then((res) => setRankLists(res.music))
      .catch((err) => console.log(err));
  }, []);

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
          {rankLists?.map((el, index) => {
            return (
              <FinalRankLists
                key={index}
                data={el}
                rank={index + 1}
              ></FinalRankLists>
            );
          })}
        </S.ListWrapper>
      </S.MiddleFlexBox>
    </S.Main>
  );
};

export default WorldCupFinal;
