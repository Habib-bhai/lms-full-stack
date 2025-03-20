'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Rate } from '../types/shipping';
import Image from 'next/image';

interface ShippingRatesProps {
  Rates: {rate:Rate[]};
  onSelect: (rate: Rate) => void;
}

export default function ShippingRates({ Rates, onSelect }: ShippingRatesProps) {

  console.log("rates ==>>>",Rates)

  return (
    <div className="space-y-4 flex gap-10 flex-wrap">
      <h2 className="text-xl font-bold">Available Shipping Options</h2>
      {Rates?.rate?.map((rate: Rate) => (
        <div key={rate.objectId} className="border-black border-[2px] h-96 w-96 flex justify-between items-center  p-4 rounded">
          <div className='h-96 w-96   text-black'>
            <p className="font-semibold">{rate.provider}</p>
            <p>{rate.servicelevel.name}</p>
            <p>Estimated delivery: {rate.estimatedDays} days</p>
            <Image src={rate.providerImage75} alt='provider image' height={200} width={200}/>
          </div>
          <div>
            <p className="font-bold">${rate.amount}</p>
            <Button onClick={() => onSelect(rate)}>Select</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

