import { NextResponse } from 'next/server';
import shippo from '@/utils/shippoClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // console.log("body===>",body)  

    
    const shipment = await shippo.shipments.get(body.shipmentId)
    

    // console.log("shipment in route handler===>" ,shipment)

    if(!shipment.rates || shipment.rates.length === 0){
      return NextResponse.json({error: "rates not found"}, {status: 404})
    }

    return NextResponse.json({rate: shipment.rates}, {status: 200})


  } catch (error) {

    return NextResponse.json({ error: 'Error fetching rates' }, { status: 500 });
    
  }
}