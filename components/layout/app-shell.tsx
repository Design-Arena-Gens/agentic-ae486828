"use client";

import { Sidebar } from './sidebar';
import { Topbar } from './topbar';
import { NowPlayingBar } from '@/components/player/now-playing-bar';

type Props = {
  children: React.ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-neutral-950 p-4 md:p-6">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 gap-4">
        <Sidebar />
        <div className="flex w-full flex-1 flex-col gap-4">
          <div className="flex-1 rounded-3xl bg-neutral-900/60 p-4 md:p-6">
            <Topbar />
            <main className="mt-6 space-y-10">{children}</main>
          </div>
          <NowPlayingBar />
        </div>
      </div>
    </div>
  );
}
