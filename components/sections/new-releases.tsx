"use client";

import Image from 'next/image';
import { Play } from 'lucide-react';
import type { Track } from '@/types/music';
import { usePlayer } from '@/hooks/usePlayer';

type Props = {
  tracks: Track[];
};

export function NewReleases({ tracks }: Props) {
  const { playTrack } = usePlayer();

  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white md:text-2xl">Fresh drops</h2>
          <p className="text-sm text-neutral-400">Brand-new albums shaking up the scene.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {tracks.slice(0, 12).map((track) => (
          <div
            key={track.id}
            className="group relative flex flex-col gap-3 overflow-hidden rounded-3xl bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-neutral-900">
              {track.artwork ? (
                <Image src={track.artwork} alt={track.title} fill className="object-cover" sizes="200px" />
              ) : null}
              <button
                type="button"
                onClick={() => playTrack(track)}
                className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-black shadow-soft transition hover:bg-brand-dark"
                aria-label="Play preview"
              >
                <Play size={20} />
              </button>
            </div>
            <div className="space-y-1">
              <p className="line-clamp-2 text-sm font-semibold text-white">{track.album ?? track.title}</p>
              <p className="text-xs text-neutral-400">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
