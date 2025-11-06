import { getCuratedPlaylists } from '@/lib/musicApi';
import { FeaturedPlaylists } from '@/components/sections/featured-playlists';

export const revalidate = 1800;

export default async function PlaylistsPage() {
  const playlists = await getCuratedPlaylists();

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-white md:text-3xl">Curated playlists</h1>
        <p className="text-sm text-neutral-400">
          Crafted blends spanning downtempo, indie sunrise essentials, and productivity boosters.
        </p>
      </div>
      <FeaturedPlaylists playlists={playlists} />
    </div>
  );
}
