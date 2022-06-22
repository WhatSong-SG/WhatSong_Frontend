export interface Top10SongType {
  id: number;
  artist: string;
  cover: string;
  date: string;
  track_name: string;
  up: number;
}

export interface Top10SongsType {
  music: Top10SongType[];
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
