import { FC } from "react";
import * as S from "./styles";
import WorldCupGameContainer from "./worldcup-game-container/index";
import WorldCupModal from "../worldcup-modal/index";

interface Props {
  genre: any;
}

const WorldCupGame: FC<Props> = ({ genre }) => {
  return (
    <S.DisplayFlexBox>
      <WorldCupModal genre={genre} />
      <WorldCupGameContainer />
    </S.DisplayFlexBox>
  );
};

export default WorldCupGame;
