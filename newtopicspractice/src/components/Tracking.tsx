import React from 'react';
import { TrackingData as TrackingInfoType } from '@/types/shipping';

interface TrackingInfoProps {
  tracking: TrackingInfoType;
}

export default function TrackingInfo({ tracking }: TrackingInfoProps) {


console.log("tracking information ====>>>>",tracking)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Tracking Information</h2>
      <p>Tracking Number: {tracking.tracking_number}</p>
      <p>Status: {tracking.tracking_status.status}</p>
      <p>Estimated Delivery: {tracking.eta}</p>
      <h3 className="font-semibold mt-4">Tracking History</h3>
      <ul className="list-disc pl-5">

        {tracking.tracking_history.map((event, index) => (
          <li key={index}>
            {event.status} - {new Date(event.status_date).toLocaleString()}
          </li>
        ))}
        
      </ul>
    </div>
  );
}

