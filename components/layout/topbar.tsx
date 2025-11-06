"use client";

import Link from 'next/link';
import { Bell, Gift } from 'lucide-react';
import { SearchField } from '@/components/ui/search-field';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex flex-col gap-4 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-transparent px-2 pt-4 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <SearchField className="max-w-xl" />

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white"
          >
            <Bell size={18} />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-white/10 hover:text-white"
          >
            <Gift size={18} />
          </button>
          <ThemeToggle />
          <Link
            href="/upgrade"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-100 sm:block"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </header>
  );
}
