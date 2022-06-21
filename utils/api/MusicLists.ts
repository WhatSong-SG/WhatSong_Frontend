import { instance } from ".";

export const MusicLists = async () => {
  const data = await instance.get("/music/genre/2");

  return data.data.music;
};
