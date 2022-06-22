import { FC } from "react";
import Home from "../components/Home";
import Carousal from "../components/Carousal";
import styled from "@emotion/styled";
import { getDailySong } from "../utils/api/Home";
import { get10Songs } from "../utils/api/Home";
import { Top10SongsType, DailySongType } from "../interface/Home";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const getStaticProps = async () => {
  const dailySong = await getDailySong();
  const top10Songs = await get10Songs();

  return {
    props: {
      dailySong,
      top10Songs,
    },
  };
};

interface Props {
  dailySong: DailySongType;
  top10Songs: Top10SongsType;
}

const HomePage: FC<Props> = ({ dailySong, top10Songs }): JSX.Element => {
  return (
    <HomePageContainer>
      <Home dailySong={dailySong} />
      <Carousal top10Songs={top10Songs} />
    </HomePageContainer>
  );
};
export default HomePage;
