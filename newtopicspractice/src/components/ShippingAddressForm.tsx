'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Address } from '../types/shipping';

interface ShippingAddressFormProps {
  onSubmit: (address: Address) => void;
}

export default function ShippingAddressForm({ onSubmit }: ShippingAddressFormProps) {
  const [address, setAddress] = useState<Address>({
    name: '',
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {(Object.keys(address) as Array<keyof Address>).map((key) => (
        <Input
          key={key}
          name={key}
          value={address[key]}
          onChange={handleChange}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          required
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
}

