import { NextResponse } from 'next/server';
import shippo from '@/utils/shippoClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("================",body.rateId, "====================")

    const transaction = await shippo.transactions.create({
      rate: `${body.rateId}`,
      labelFileType: 'PNG',
      async: false
    });

    console.log('Label created=========================:', transaction);

    return NextResponse.json(transaction);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating label' }, { status: 500 });
  }
}