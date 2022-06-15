import { FC, useState } from "react";
import * as S from "./styles";
import WorldCupGameContainer from "./worldcup-game-container/index";
import WorldCupModal from "../worldcup-modal/index";

interface Props {
  genre: any;
}

const WorldCupGame: FC<Props> = ({ genre }) => {
  const [isRoundModalOpen, setIsRoundModalOpen] = useState(true);
  return (
    <S.DisplayFlexBox>
      {isRoundModalOpen === true && (
        <WorldCupModal
          genre={genre}
          setIsRoundModalOpen={setIsRoundModalOpen}
        />
      )}
      <WorldCupGameContainer isRoundModalOpen={isRoundModalOpen} />
    </S.DisplayFlexBox>
  );
};

export default WorldCupGame;
