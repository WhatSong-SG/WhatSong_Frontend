import { FC, useEffect, useState } from "react";
import * as S from "./style";
import GameItemBox from "./GameItem";

interface Props {}

const WorldCupGameMainEngine: FC<Props> = () => {
  const [selectDirection, setSelectDirection] = useState<string>("");

  useEffect(() => {
    console.log(selectDirection);
    if (selectDirection === "left" || selectDirection === "right") {
      setTimeout(() => {
        setSelectDirection("");
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
