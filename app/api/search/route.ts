import { NextResponse } from 'next/server';
import { searchTracks } from '@/lib/musicApi';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  try {
    const results = await searchTracks(query);
    return NextResponse.json({ results });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
