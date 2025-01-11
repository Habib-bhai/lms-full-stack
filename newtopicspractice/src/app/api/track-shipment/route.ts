import { NextResponse } from 'next/server';
import shippo from '@/utils/shippoClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const carrier = searchParams.get('carrier');
  const trackingNumber = searchParams.get('trackingNumber');

  if (!carrier || !trackingNumber) {
    return NextResponse.json({ error: 'Missing carrier or tracking number' }, { status: 400 });
  }

  try {
    const tracking = await shippo.trackingStatus.get(carrier, trackingNumber);
    return NextResponse.json(tracking);
  } catch (error) {
    return NextResponse.json({ error: 'Error tracking shipment' }, { status: 500 });
  }
}