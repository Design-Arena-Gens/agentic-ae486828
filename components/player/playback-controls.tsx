"use client";

import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { usePlayer } from '@/hooks/usePlayer';

export function PlaybackControls() {
  const { isPlaying, togglePlay, playNext, playPrevious, currentTrack } = usePlayer();

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={playPrevious}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white"
        aria-label="Previous track"
        disabled={!currentTrack}
      >
        <SkipBack size={16} />
      </button>
      <button
        type="button"
        onClick={togglePlay}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
        aria-label={isPlaying ? 'Pause' : 'Play'}
        disabled={!currentTrack}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <button
        type="button"
        onClick={playNext}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white"
        aria-label="Next track"
        disabled={!currentTrack}
      >
        <SkipForward size={16} />
      </button>
    </div>
  );
}
