export interface InfoFindApiData {
  current_round: number;
  id: number;
  is_finish: boolean;
  match: number;
  match_count: number;
  music1: { name: string; artist: string; cover: string };
  music2: { name: string; artist: string; cover: string };
}

export interface FinalWinnerType {
  name: string;
  cover: string;
  artist: string;
}
