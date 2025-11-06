import Link from 'next/link';
import { Suspense } from 'react';
import { SearchResults } from '@/components/search/search-results';
import { SearchField } from '@/components/ui/search-field';

const quickPicks = ['weekend vibes', 'lofi beats', 'hyperpop', 'r&b chill', 'house party'];

type Props = {
  searchParams?: { q?: string };
};

export default function SearchPage({ searchParams }: Props) {
  const query = searchParams?.q ? decodeURIComponent(searchParams.q) : '';

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-white">Search</h1>
        <p className="text-sm text-neutral-400">
          Explore millions of tracks powered by Apple&apos;s open iTunes Search API.
        </p>
      </div>

      <SearchField initialQuery={query} />

      <div className="flex flex-wrap gap-2">
        {quickPicks.map((pick) => (
          <Link
            key={pick}
            href={`/search?q=${encodeURIComponent(pick)}`}
            className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-200 transition hover:bg-white/10 hover:text-white"
          >
            #{pick}
          </Link>
        ))}
      </div>

      <Suspense fallback={<p className="text-sm text-neutral-400">Preparing results…</p>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}
