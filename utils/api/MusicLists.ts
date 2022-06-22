import { instance } from ".";

export const MusicLists = async (id: number) => {
  const data = await instance.get(`/music/genre/${id}`);

  return data.data.music;
};
