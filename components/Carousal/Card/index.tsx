import { FC, RefObject } from "react";
import * as S from "./styles";

interface Props {
  img_src: string;
  title: string;
  artist: string;
  ref: RefObject<HTMLDivElement> | null;
  isCurrent: boolean;
  onClick: () => void;
}

const Card: FC<Props> = ({ img_src, title, artist, ref, isCurrent, onClick }): JSX.Element => {
  return (
    <S.CardContainer ref={ref} opacity={isCurrent ? 1 : 0.5} onClick={onClick}>
      <S.CardImage src={img_src} alt="card_image" width={isCurrent ? "90%" : "60%"} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardArtist>{artist}</S.CardArtist>
    </S.CardContainer>
  );
};

export default Card;
