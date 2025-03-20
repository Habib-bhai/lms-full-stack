'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TrackingInfo from '@/components/Tracking';
import { TrackingData as TrackingInfoType } from '@/types/shipping';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState<string>('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfoType | null>(null);

  const handleTrack = async () => {
    try {
      const response = await fetch(`/api/track-shipment?carrier=shippo&trackingNumber=${trackingNumber}`);
      const data: TrackingInfoType = await response.json();
      setTrackingInfo(data);
    } catch (error) {
      console.error('Error tracking shipment:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Track Your Shipment</h1>
      <div className="flex space-x-2 mb-4">
        <Input
          value={trackingNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
        />
        <Button onClick={handleTrack}>Track</Button>
      </div>
      {trackingInfo && <TrackingInfo tracking={trackingInfo} />}
    </div>
  );
}

