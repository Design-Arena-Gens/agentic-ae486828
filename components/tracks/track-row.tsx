"use client";

import Image from 'next/image';
import clsx from 'clsx';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { usePlayer } from '@/hooks/usePlayer';
import type { Track } from '@/types/music';

const formatDuration = (seconds: number) => {
  if (!seconds) return '—';
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${remainder.toString().padStart(2, '0')}`;
};

type Props = {
  track: Track;
  index?: number;
  contextQueue?: Track[];
};

export function TrackRow({ track, index, contextQueue }: Props) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();
  const isCurrent = currentTrack?.id === track.id;

  const handlePlay = () => {
    if (isCurrent) {
      togglePlay();
    } else {
      playTrack(track, contextQueue);
    }
  };

  return (
    <div
      className={clsx(
        'group flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors',
        isCurrent ? 'bg-white/10' : 'bg-white/0 hover:bg-white/5'
      )}
    >
      <div className="flex items-center gap-4">
        <span className="w-6 text-sm text-neutral-500">{(index ?? 0) + 1}</span>
        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-neutral-800">
          <Image src={track.artwork} alt={track.title} fill className="object-cover" sizes="50px" />
        </div>
      </div>
      <div className="mr-auto flex min-w-0 flex-col">
        <p className="truncate text-sm font-semibold text-white">{track.title}</p>
        <p className="truncate text-xs text-neutral-400">{track.artist}</p>
      </div>

      <div className="hidden w-40 text-sm text-neutral-400 sm:block">{track.album}</div>
      <div className="hidden w-16 text-sm text-neutral-500 sm:block">{formatDuration(track.duration)}</div>

      <div className="flex items-center gap-3">
        {track.link ? (
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white lg:flex"
            aria-label="Open in Apple Music"
          >
            <ExternalLink size={16} />
          </a>
        ) : null}
        <button
          type="button"
          onClick={handlePlay}
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-full transition',
            isCurrent ? 'bg-white text-black hover:scale-105' : 'bg-white/10 text-white hover:bg-white/20'
          )}
          aria-label="Play track"
        >
          {isCurrent && isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </div>
  );
}
