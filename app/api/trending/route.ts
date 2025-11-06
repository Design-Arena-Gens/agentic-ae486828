import { NextResponse } from 'next/server';
import { getFeaturedCharts, getNewReleases } from '@/lib/musicApi';

export async function GET() {
  try {
    const [charts, newReleases] = await Promise.all([getFeaturedCharts(), getNewReleases()]);
    return NextResponse.json({ charts, newReleases });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load trending data' }, { status: 500 });
  }
}
