import Link from 'next/link';
import { AppShell } from '@/components/layout/app-shell';

export default function NotFound() {
  return (
    <AppShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">404</div>
        <h1 className="text-3xl font-bold text-white">We lost the beat on this page</h1>
        <p className="max-w-md text-sm text-neutral-400">
          The playlist you&apos;re looking for might have been remixed or removed. Let&apos;s get you back to the
          freshest sounds.
        </p>
        <Link
          href="/"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-black transition hover:bg-brand-dark"
        >
          Return home
        </Link>
      </div>
    </AppShell>
  );
}
