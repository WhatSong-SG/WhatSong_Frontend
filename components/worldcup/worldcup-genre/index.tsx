import { FC, useState, useEffect } from "react";
import * as S from "./styles";
import GenreListItem from "./GenreListItem";
import dynamic from "next/dynamic";

const TrophyWithNoSSR = dynamic(() => import("../../../public/icon/Trophy"), {
  ssr: false,
});

const WorldCupGenre: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => removeEventListener("resize", () => {});
  }, []);

  return (
    <S.WorldCupMainContainer>
      <S.GenreArticle>
        <S.HeaderTitleWrapper>
          <h1>Choose Your Genre</h1>
          <TrophyWithNoSSR />
        </S.HeaderTitleWrapper>
        <S.GenreListContainer>
          <GenreListItem
            genre={"KPOP"}
            size={windowWidth <= 768 ? "141" : "194.61"}
          />
          <GenreListItem
            genre={"KPOP"}
            size={windowWidth <= 768 ? "142" : "194.61"}
          />
          <GenreListItem
            genre={"KPOP"}
            size={windowWidth <= 768 ? "142" : "194.61"}
          />
          <GenreListItem
            genre={"KPOP"}
            size={windowWidth <= 768 ? "142" : "194.61"}
          />
          <GenreListItem
            genre={"KPOP"}
            size={windowWidth <= 768 ? "142" : "194.61"}
          />
          <GenreListItem
            genre={"KPOP"}
            size={windowWidth <= 768 ? "142" : "194.61"}
          />

        </S.GenreListContainer>
      </S.GenreArticle>
    </S.WorldCupMainContainer>
  );
};

export default WorldCupGenre;
