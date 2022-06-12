import { FC } from "react";
import * as S from "./styles";
import WorldCupGameContainer from "./worldcup-game-container/index";

interface Props {
  genre: any;
}

const WorldCupGame: FC<Props> = ({ genre }) => {
  return (
    <S.DisplayFlexBox>
      <WorldCupGameContainer />
    </S.DisplayFlexBox>
  );
};

export default WorldCupGame;
