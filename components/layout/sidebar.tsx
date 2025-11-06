"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LibraryBig, Search, Sparkles, Star } from 'lucide-react';
import clsx from 'clsx';

const primaryLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/playlists', label: 'Curated Playlists', icon: Sparkles }
];

const secondaryLinks = [
  { href: '/collections/favorites', label: 'Favorites', icon: Star },
  { href: '/collections/library', label: 'Your Library', icon: LibraryBig }
];

const SidebarLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Home }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={clsx(
        'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        isActive ? 'bg-white/10 text-white' : 'text-neutral-300 hover:bg-white/5 hover:text-white'
      )}
    >
      <Icon
        size={20}
        className={clsx(
          'transition-transform',
          isActive ? 'text-brand-dark' : 'text-neutral-400 group-hover:scale-105 group-hover:text-white'
        )}
      />
      {label}
    </Link>
  );
};

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col gap-6 rounded-3xl bg-neutral-900/70 p-6 lg:flex">
      <div>
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-black shadow-soft">
            ♫
          </div>
          RhythmWave
        </Link>
      </div>

      <nav className="flex flex-col gap-1">
        {primaryLinks.map((link) => (
          <SidebarLink key={link.href} {...link} />
        ))}
      </nav>

      <div className="mt-6 border-t border-white/5 pt-4">
        <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">For You</p>
        <div className="flex flex-col gap-1">
          {secondaryLinks.map((link) => (
            <SidebarLink key={link.href} {...link} />
          ))}
        </div>
      </div>
    </aside>
  );
}
