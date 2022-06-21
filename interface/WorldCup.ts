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

export interface FinalRankListType {
  artist: string;
  cover: string;
  date: string;
  id: number;
  track_name: string;
  up: number;
}

export interface MusicInfoType {
  artist: string;
  cover: string;
  date: string;
  id: number;
  link: {
    apple_music: string;
    youtube_music: string;
    spotify: string;
  };
  track_name: string;
  up: number;
}
