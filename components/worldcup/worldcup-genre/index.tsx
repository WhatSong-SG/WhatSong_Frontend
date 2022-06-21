import { FC, useState, useEffect } from "react";
import * as S from "./styles";
import GenreListItem from "./GenreListItem";
import dynamic from "next/dynamic";
import { getGenreList } from "../../../utils/api/Worldcup";

const TrophyWithNoSSR = dynamic(() => import("../../../public/icon/Trophy"), {
  ssr: false,
});

type GenreList = {
  cover: string;
  id: number;
  name: string;
};

const WorldCupGenre: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [genreList, setGenreList] = useState<Array<GenreList>>([]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    try {
      getGenreList().then((res) => {
        setGenreList(res.genres);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <S.WorldCupMainContainer>
      <S.GenreArticle>
        <S.HeaderTitleWrapper>
          <h1>Choose Your Genre</h1>
          <TrophyWithNoSSR />
        </S.HeaderTitleWrapper>
        <S.GenreListContainer>
          {genreList.map((ele, index) => {
            return (
              <GenreListItem
                key={ele.id}
                genre={ele.name}
                cover={ele.cover}
                size={windowWidth <= 768 ? "141" : "194.61"}
              />
            );
          })}
        </S.GenreListContainer>
      </S.GenreArticle>
    </S.WorldCupMainContainer>
  );
};

export default WorldCupGenre;
