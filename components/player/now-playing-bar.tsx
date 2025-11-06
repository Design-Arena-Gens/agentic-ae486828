"use client";

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { usePlayer } from '@/hooks/usePlayer';
import { PlaybackControls } from './playback-controls';
import { VolumeSlider } from './volume-slider';

export function NowPlayingBar() {
  const { currentTrack } = usePlayer();

  return (
    <div className="sticky bottom-0 left-0 right-0 z-40 rounded-3xl border border-white/5 bg-neutral-950/90 p-4 shadow-soft backdrop-blur">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,240px)_1fr_minmax(0,220px)]">
        <div className="flex items-center gap-4">
          {currentTrack ? (
            <>
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-neutral-900">
                <Image
                  src={currentTrack.artwork}
                  alt={currentTrack.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{currentTrack.title}</p>
                <p className="text-xs text-neutral-400">{currentTrack.artist}</p>
              </div>
            </>
          ) : (
            <div>
              <p className="text-sm font-semibold text-neutral-300">Nothing playing</p>
              <p className="text-xs text-neutral-500">Choose a track to start the vibe</p>
            </div>
          )}
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white md:flex"
            aria-label="Save to favorites"
            disabled={!currentTrack}
          >
            <Heart size={18} />
          </button>
        </div>

        <PlaybackControls />

        <div className="flex w-full items-center justify-end">
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
}
