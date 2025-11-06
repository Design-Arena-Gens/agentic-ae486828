"use client";

import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';
import { usePlayer } from '@/hooks/usePlayer';

const getVolumeIcon = (volume: number) => {
  if (volume === 0) return VolumeX;
  if (volume < 0.35) return Volume;
  if (volume < 0.7) return Volume1;
  return Volume2;
};

export function VolumeSlider() {
  const { volume, setVolume } = usePlayer();
  const Icon = getVolumeIcon(volume);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setVolume(volume === 0 ? 0.6 : 0)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white"
        aria-label="Toggle mute"
      >
        <Icon size={18} />
      </button>
      <input
        className="h-1 w-32 cursor-pointer appearance-none rounded-full bg-white/20 accent-white"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
        aria-label="Volume"
      />
    </div>
  );
}
