'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Rate } from '../types/shipping';

interface ShippingRatesProps {
  rates: Rate[];
  onSelect: (rate: Rate) => void;
}

export default function ShippingRates({ rates, onSelect }: ShippingRatesProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Available Shipping Options</h2>
      {rates.map((rate) => (
        <div key={rate.object_id} className="flex justify-between items-center border p-4 rounded">
          <div>
            <p className="font-semibold">{rate.provider}</p>
            <p>{rate.servicelevel.name}</p>
            <p>Estimated delivery: {rate.estimated_days} days</p>
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

