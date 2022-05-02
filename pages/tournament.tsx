import type { NextPage } from "next";
import WorldCupGenre from "../components/worldcup/worldcup-genre";
import dynamic from "next/dynamic";

const WorldCuptGenreWithNoSSR = dynamic(
  () => import("../components/worldcup/worldcup-genre/index"),
  {
    ssr: false,
  }
);

const tournament: NextPage = () => {
  return <WorldCuptGenreWithNoSSR />;
};

export default tournament;
