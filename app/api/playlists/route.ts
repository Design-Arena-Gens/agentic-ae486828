import { NextResponse } from 'next/server';
import { getCuratedPlaylists } from '@/lib/musicApi';

export async function GET() {
  try {
    const playlists = await getCuratedPlaylists();
    return NextResponse.json({ playlists });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to build playlists' }, { status: 500 });
  }
}
