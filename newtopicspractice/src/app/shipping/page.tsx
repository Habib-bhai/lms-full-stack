'use client'
import React, { useState } from 'react';
import ShippingAddressForm from '@/components/ShippingAddressForm';
import ShippingRates from '@/components/ShippingRates';
import { Address, Rate } from '@/types/shipping';

export default function CheckoutPage() {
  const [shipmentId, setShipmentId] = useState<string | null>(null);
  const [rates, setRates] = useState<{rate: Rate[]}>({rate: []});

  const handleAddressSubmit = async (address: Address) => {
    try {
      const response = await fetch('/api/create-shipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          addressFrom: {
            name: 'React Store',
            street1: 'React Street in Next.js Neighbourhood',
            city: 'React City',
            state: 'ST',
            zip: '12345',
            country: 'US',
            email: "helloworld@gmail.com",
            phone: "83838383",
            validate: true
          },
          addressTo: address,
          parcels: [
            {
              length: '5',
              width: '5',
              height: '5',
              distanceUnit: 'in',
              weight: '2',
              massUnit: 'lb',
            },
          ],
        }),
      });

      const shipment = await response.json();
      console.log("Full shipment response:", shipment);
      
      if (shipment.objectId) {
        setShipmentId(shipment.objectId);

        const ratesResponse = await fetch(`/api/get-rates`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({shipmentId: shipment.objectId})
          
        });

        const ratesData = await ratesResponse.json();
        console.log("Rates====> : ", ratesData);

        setRates(ratesData);
      } else {
        
        console.error('Shipment creation failed:', shipment);
      }
    } catch (error) {
      console.error('Error creating shipment:', error);
    }
  };

  const handleRateSelect = async (rate: Rate) => {
    try {

      // console.log("Rate selected:", rate);

      const response = await fetch('/api/create-label', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rateId: rate.objectId }),
      });

      const transaction = await response.json();
      console.log('Label created:', transaction);
      // Here you would typically save the transaction details and proceed with the order
    } catch (error) {
      console.error('Error creating label:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {!shipmentId ? (
        <ShippingAddressForm onSubmit={handleAddressSubmit} />
      ) : (
        <ShippingRates Rates={rates} onSelect={handleRateSelect} />
      )}
    </div>
  );
}

