import { NextResponse } from 'next/server';
import shippo from '@/utils/shippoClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const shipment = await shippo.shipments.create({
      addressFrom: body.addressFrom,
      addressTo: body.addressTo,
      parcels: body.parcels,
      async: false
    });

    // console.log("shipment post request====>>>>>",shipment)

    return NextResponse.json(shipment);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating shipment' }, { status: 500 });
  }
}