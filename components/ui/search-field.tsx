"use client";

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

type Props = {
  placeholder?: string;
  className?: string;
  initialQuery?: string;
};

export function SearchField({
  placeholder = 'Search songs, artists, albums…',
  className,
  initialQuery = ''
}: Props) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`group relative flex w-full items-center overflow-hidden rounded-full bg-white/5 px-5 py-2 transition focus-within:bg-white/10 ${className ?? ''}`}
    >
      <Search size={18} className="mr-3 text-neutral-400 transition group-focus-within:text-white" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="flex-1 border-none bg-transparent text-sm text-white placeholder:text-neutral-400 focus:outline-none"
        type="search"
      />
      <button
        type="submit"
        className="rounded-full bg-brand px-4 py-1 text-xs font-semibold text-black transition hover:bg-brand-dark"
      >
        Search
      </button>
    </form>
  );
}
