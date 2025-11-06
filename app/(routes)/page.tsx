import { HeroBanner } from '@/components/sections/hero-banner';
import { FeaturedPlaylists } from '@/components/sections/featured-playlists';
import { ChartSection } from '@/components/sections/chart-section';
import { NewReleases } from '@/components/sections/new-releases';
import { getCuratedPlaylists, getFeaturedCharts, getNewReleases } from '@/lib/musicApi';

export default async function HomePage() {
  const [charts, newReleases, playlists] = await Promise.all([
    getFeaturedCharts(),
    getNewReleases(),
    getCuratedPlaylists()
  ]);

  const spotlight = charts[0]?.items[0] ?? playlists[0]?.tracks[0] ?? null;

  return (
    <div className="space-y-12">
      <HeroBanner spotlight={spotlight} />
      <FeaturedPlaylists playlists={playlists} />
      <ChartSection charts={charts} />
      <NewReleases tracks={newReleases} />
    </div>
  );
}
