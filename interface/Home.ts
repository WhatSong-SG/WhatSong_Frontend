export interface Top10SongsType {
  id: number;
  artist: string;
  cover: string;
  date: string;
  track_name: string;
  up: number;
}

export interface DailySongType {
  artist: string;
  track_name: string;
  cover: string;
  link: {
    apple_music: string;
    youtube_music: string;
    spotify: string;
  };
}
