import Link from 'next/link';
import { Play } from 'lucide-react';
import type { Playlist } from '@/types/music';

type Props = {
  playlists: Playlist[];
};

export function FeaturedPlaylists({ playlists }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white md:text-2xl">Curated soundtracks</h2>
          <p className="text-sm text-neutral-400">Handpicked journeys inspired by your taste.</p>
        </div>
        <Link href="/playlists" className="text-sm font-semibold text-neutral-200 hover:text-white">
          View all
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {playlists.map((playlist) => {
          const heroTrack = playlist.tracks[0];
          return (
            <Link
              key={playlist.id}
              href={`/playlists/${playlist.id}`}
              className={`group relative flex h-56 flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${playlist.color} p-6 text-white transition hover:-translate-y-1 hover:shadow-soft`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/70">{playlist.curator}</span>
                  <h3 className="mt-2 text-xl font-bold">{playlist.name}</h3>
                </div>
                <div className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                  {playlist.tracks.length} tracks
                </div>
              </div>
              <p className="max-w-xs text-sm text-white/80">{playlist.description}</p>
              {heroTrack ? (
                <div className="flex items-center justify-between text-sm text-white/70">
                  <div>
                    <p className="font-semibold text-white">{heroTrack.title}</p>
                    <p>{heroTrack.artist}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition group-hover:scale-105">
                    <Play size={20} />
                  </div>
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
