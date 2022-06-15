import { instance } from ".";

export const get10Songs = async () => {
  const data = await instance.get("/music/top10");

  return data.data.music;
};
