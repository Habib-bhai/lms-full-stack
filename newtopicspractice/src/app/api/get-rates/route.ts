import { NextResponse } from 'next/server';
import shippo from '@/utils/shippoClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // console.log("body===>",body)  

    const rates = await shippo.rates.get(body.shipmentId);
    return NextResponse.json(rates);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching rates' }, { status: 500 });
  }
}