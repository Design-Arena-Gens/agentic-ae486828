"use client";

import { createContext } from 'react';
import type { Track } from '@/types/music';

export type PlayerState = {
  currentTrack: Track | null;
  isPlaying: boolean;
  queue: Track[];
  volume: number;
};

export type PlayerContextValue = PlayerState & {
  playTrack: (track: Track, queue?: Track[]) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setVolume: (value: number) => void;
};

export const defaultPlayerState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  queue: [],
  volume: 0.75
};

export const PlayerContext = createContext<PlayerContextValue>({
  ...defaultPlayerState,
  playTrack: () => undefined,
  togglePlay: () => undefined,
  playNext: () => undefined,
  playPrevious: () => undefined,
  setVolume: () => undefined
});
