/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import * as S from "./style";
import GameItemBox from "./GameItem";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  MatchCount,
  MatchCountMax,
  MatchInfoData,
  TournamentId,
} from "../../../../module/atom/worldcup/worldcup";
import { matchInfoFind } from "../../../../utils/api/Worldcup";
import { selectWinnder } from "../../../../utils/api/Worldcup";
import { useRouter } from "next/router";

interface Props {}

const WorldCupGameMainEngine: FC<Props> = () => {
  const [selectDirection, setSelectDirection] = useState<string>("");
  const [tournamentId, setTournamentId] = useRecoilState(TournamentId);
  const [matchCount, setMatchCount] = useRecoilState(MatchCount);
  const [matchInfoData, setMatchInfoData] = useRecoilState(MatchInfoData);
  const matchCountMax = useRecoilValue(MatchCountMax);

  const router = useRouter();
  const { gener } = router.query;

  useEffect(() => {
    if (selectDirection === "left" || selectDirection === "right") {
      if (selectDirection === "left") {
        selectWinnder(tournamentId, matchCount, 0)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      } else if (selectDirection === "right") {
        selectWinnder(tournamentId, matchCount, 1)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }

      setTimeout(() => {
        if (matchCountMax - 1 === matchCount) {
          router.push(`/tournament/${gener}/final`);
        } else {
          setSelectDirection("");
          setMatchCount(matchCount + 1);
        }
      }, 1250);
    }
  }, [selectDirection]);

  return (
    <S.MainContainer>
      {(() => {
        switch (selectDirection) {
          case "left":
            return (
              <GameItemBox
                direction="left"
                setSelectDirection={setSelectDirection}
                win={true}
              />
            );
          case "right":
            return (
              <GameItemBox
                direction="right"
                setSelectDirection={setSelectDirection}
                win={true}
              />
            );
          case "":
            return (
              <>
                <GameItemBox
                  direction={"left"}
                  setSelectDirection={setSelectDirection}
                  win={false}
                />
                <b>Vs</b>
                <GameItemBox
                  direction={"right"}
                  setSelectDirection={setSelectDirection}
                  win={false}
                />
              </>
            );
        }
      })()}
    </S.MainContainer>
  );
};

export default WorldCupGameMainEngine;
