import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PlayerProvider } from '@/components/providers/player-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RhythmWave | Stream music you love',
  description:
    'A Spotify-inspired music streaming experience powered by free music APIs. Discover, search, and play tracks instantly.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PlayerProvider>{children}</PlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
