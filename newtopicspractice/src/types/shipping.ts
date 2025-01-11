// types/shipping.ts
export interface Address {
    name: string;
    street1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
  }
  
  export interface Parcel {
    length: string;
    width: string;
    height: string;
    weight: string;
    distanceUnit: 'in' | 'cm';
    massUnit: 'lb' | 'kg';
  }
  
  export interface ShippingFormData {
    fromAddress: Address;
    toAddress: Address;
    parcels: Parcel[];
  }
  
  export interface Rate {
    object_id: string;
    provider: string;
    servicelevel: {
      name: string;
      token: string;
    };
    amount: string;
    estimated_days: number;
    duration_terms: string;
  }
  
  export interface TrackingEvent {
    status: string;
    status_date: string;
    status_details: string;
    location: {
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  }
  
  export interface TrackingData {
    tracking_number: string;
    eta: string;
    carrier: string;
    tracking_status: TrackingEvent;
    tracking_history: TrackingEvent[];
  }