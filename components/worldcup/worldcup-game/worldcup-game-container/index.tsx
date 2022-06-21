import { FC, useEffect, useState } from "react";
import * as S from "./style";
import WorldCupTitleWrapper from "./WorldCupTitleData";
import WorldCupGameMainEngine from "../worldcup-game-main-engine/index";
import {
  MatchCount,
  MatchInfoData,
  TournamentId,
} from "../../../../module/atom/worldcup/worldcup";
import { useRecoilState, useRecoilValue } from "recoil";
import { matchInfoFind } from "../../../../utils/api/Worldcup";

interface Props {
  isRoundModalOpen: boolean;
}

const WorldCupGameContainer: FC<Props> = ({ isRoundModalOpen }) => {
  const tournamentId = useRecoilValue(TournamentId);
  const matchCount = useRecoilValue(MatchCount);
  const [matchInfoData, setMatchInfoData] = useRecoilState(MatchInfoData);

  useEffect(() => {
    matchInfoFind(tournamentId, matchCount)
      .then((res) => {
        setMatchInfoData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [tournamentId, matchCount, setMatchInfoData]);

  return (
    <S.Main>
      {isRoundModalOpen === false && (
        <>
          <WorldCupTitleWrapper
            currentRound={matchInfoData.current_round}
            match={matchInfoData.match}
            matchCount={matchInfoData.match_count}
          />
          <WorldCupGameMainEngine />
        </>
      )}
    </S.Main>
  );
};

export default WorldCupGameContainer;
