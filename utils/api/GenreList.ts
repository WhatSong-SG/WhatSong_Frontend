import { instance } from ".";

export const getGenreList = async () => {
  const data = await instance.get("/genre");

    return data.data.genres;
};
