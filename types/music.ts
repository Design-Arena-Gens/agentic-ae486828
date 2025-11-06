export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  previewUrl?: string;
  duration: number;
  genre?: string;
  releaseDate?: string;
  link?: string;
};

export type Playlist = {
  id: string;
  name: string;
  description: string;
  cover?: string;
  curator: string;
  color: string;
  tracks: Track[];
};

export type ChartGroup = {
  id: string;
  title: string;
  subtitle?: string;
  accent: string;
  items: Track[];
};
