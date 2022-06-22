import WorldCupGenre from "../components/worldcup/worldcup-genre";
import { getGenreList } from "../utils/api/Worldcup";
import { FC } from "react";
import { WorldCupGenreProps } from "../components/worldcup/worldcup-genre";

export const getStaticProps = async () => {
  const genreList = await getGenreList();

  return {
    props: {
      genreList,
    },
  };
};

const tournament: FC<WorldCupGenreProps> = ({ genreList }) => {
  return <WorldCupGenre genreList={genreList} />;
};

export default tournament;
