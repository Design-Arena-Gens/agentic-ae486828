import Image from 'next/image';
import type { Track } from '@/types/music';

type Props = {
  spotlight?: Track | null;
};

export function HeroBanner({ spotlight }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-brand/20 via-neutral-900 to-neutral-950 p-8 md:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            <span>Daily Mix</span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span>Inspired by you</span>
          </div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">Feel the pulse of tomorrow&apos;s hits today</h1>
          <p className="text-sm text-neutral-200 md:text-base">
            Explore hand-crafted playlists, genre-bending discoveries, and real-time trends powered entirely by
            free, open music APIs. Hit play and dive into an endless session of sound exploration.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-100">
            <span className="rounded-full bg-white/10 px-4 py-2">No account needed</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Hi-fi previews</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Genre-curated journeys</span>
          </div>
        </div>

        {spotlight ? (
          <div className="relative grid max-w-sm gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900 shadow-soft">
              {spotlight.artwork ? (
                <Image src={spotlight.artwork} alt={spotlight.title} fill className="object-cover" sizes="260px" />
              ) : null}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">Spotlight track</p>
              <p className="text-lg font-semibold text-white">{spotlight.title}</p>
              <p className="text-sm text-neutral-400">{spotlight.artist}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="absolute -right-10 -top-14 h-64 w-64 rotate-12 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-20 right-40 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
    </section>
  );
}
