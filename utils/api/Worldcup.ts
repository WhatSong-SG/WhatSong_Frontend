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

export const matchInfoFind = async (
  tournament_id: number,
  match_count: number
) => {
  const data = await instance.get(
    `/tournament/${tournament_id}/match/${match_count}`
  );
  return data.data;
};

export const selectWinnder = async (
  tournament_id: number,
  match_count: number,
  winner: number
) => {
  const data = await instance.post(
    `/tournament/${tournament_id}/match/${match_count}/winner/${winner}`
  );
  return data.data;
};

export const getFinalWinner = async (tournament_id: number) => {
  const data = await instance.get(`/tournament/${tournament_id}/winner`);
  return data.data;
};

export const getFinalRank = async () => {
  const data = await instance.get(`/music/tournament/rank`);
  return data.data;
};

export const musicUp = async (musicId: number) => {
  const data = await instance.patch(`/music/${musicId}/up`);
  return data.data;
};
