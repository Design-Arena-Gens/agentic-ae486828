"use client";

import useSWR from 'swr';
import { Loader2 } from 'lucide-react';
import type { Track } from '@/types/music';
import { TrackRow } from '@/components/tracks/track-row';

const fetcher = async (url: string): Promise<{ results: Track[] }> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }
  return response.json();
};

type Props = {
  query: string;
};

export function SearchResults({ query }: Props) {
  const { data, error, isLoading } = useSWR(query ? `/api/search?q=${encodeURIComponent(query)}` : null, fetcher, {
    revalidateOnFocus: false
  });

  if (!query) {
    return <p className="text-sm text-neutral-400">Try searching for your favorite artist, album, or track.</p>;
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 text-sm text-neutral-400">
        <Loader2 className="animate-spin" size={16} />
        Searching the catalog…
      </div>
    );
  }

  if (error) {
    return <p className="text-sm text-rose-400">We couldn&apos;t load results right now. Please try again.</p>;
  }

  if (!data?.results.length) {
    return <p className="text-sm text-neutral-400">No tracks found for “{query}”.</p>;
  }

  return (
    <div className="space-y-3">
      {data.results.map((track, index) => (
        <TrackRow key={track.id} track={track} index={index} contextQueue={data.results} />
      ))}
    </div>
  );
}
