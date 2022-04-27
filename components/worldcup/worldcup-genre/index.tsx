import { FC } from "react";
import * as S from "./styles";
import Trophy from "../../../public/icon/Trophy";
import GenreListItem from "./GenreListItem";

const WorldCupGenre: FC = () => {
  return (
    <S.WorldCupMainContainer>
      <S.GenreArticle>
        <S.HeaderTitleWrapper>
          <h1>Choose Your Genre</h1>
          <Trophy />
        </S.HeaderTitleWrapper>
        <S.GenreListContainer>
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
          <GenreListItem genre={"KPOP"} />
        </S.GenreListContainer>
      </S.GenreArticle>
    </S.WorldCupMainContainer>
  );
};

export default WorldCupGenre;
