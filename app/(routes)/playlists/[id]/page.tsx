import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCuratedPlaylists } from '@/lib/musicApi';
import { TrackRow } from '@/components/tracks/track-row';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const playlists = await getCuratedPlaylists();
  return playlists.map((playlist) => ({ id: playlist.id }));
}

export const revalidate = 1800;

export default async function PlaylistDetailPage({ params }: Props) {
  const playlists = await getCuratedPlaylists();
  const playlist = playlists.find((item) => item.id === params.id);

  if (!playlist) {
    notFound();
  }

  const leadTrack = playlist.tracks[0];

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <div className="relative h-44 w-44 overflow-hidden rounded-3xl bg-neutral-900 shadow-soft">
            {leadTrack?.artwork ? (
              <Image src={leadTrack.artwork} alt={playlist.name} fill className="object-cover" sizes="180px" />
            ) : null}
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-neutral-400">RhythmWave Playlist</p>
            <h1 className="text-3xl font-bold text-white md:text-4xl">{playlist.name}</h1>
            <p className="max-w-3xl text-sm text-neutral-300 md:text-base">{playlist.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300">
              <span className="rounded-full bg-white/10 px-3 py-1">{playlist.curator}</span>
              <span className="rounded-full bg-white/10 px-3 py-1">{playlist.tracks.length} tracks</span>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      </section>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Tracklist</h2>
          <p className="text-xs text-neutral-500">Data powered by iTunes Search API</p>
        </div>
        <div className="space-y-2">
          {playlist.tracks.map((track, index) => (
            <TrackRow key={track.id} track={track} index={index} contextQueue={playlist.tracks} />
          ))}
        </div>
      </div>
    </div>
  );
}
