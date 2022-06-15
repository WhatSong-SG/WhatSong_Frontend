import { instance } from ".";

export const getGenreList = async () => {
  const data = await instance.get("/genre");
  return data.data;
};

export const createWorldCupGame = async (round: number) => {
  const data = await instance.post(`/tournament`, {
    round: round,
  });
  return data.data;
};
