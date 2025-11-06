import type { ChartGroup } from '@/types/music';
import { TrackRow } from '@/components/tracks/track-row';

type Props = {
  charts: ChartGroup[];
};

export function ChartSection({ charts }: Props) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white md:text-2xl">Trending charts</h2>
        <p className="text-sm text-neutral-400">
          Across genres, these tracks are taking over playlists around the globe.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {charts.map((chart) => (
          <div
            key={chart.id}
            className="flex h-full flex-col gap-4 rounded-3xl bg-gradient-to-br from-white/5 via-white/0 to-white/[0.02] p-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{chart.title}</h3>
              {chart.subtitle ? <p className="text-xs uppercase tracking-widest text-neutral-400">{chart.subtitle}</p> : null}
            </div>
            <div className="space-y-2">
              {chart.items.slice(0, 5).map((track, index) => (
                <TrackRow key={track.id} track={track} index={index} contextQueue={chart.items} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
