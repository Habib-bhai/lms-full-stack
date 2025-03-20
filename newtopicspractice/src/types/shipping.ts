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
    validate: boolean
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
    objectId: string;            // Unique identifier for the rate
    amount: string;             // Cost in USD
    amountLocal: string;        // Cost in local currency
    currency: string;           // Currency code (e.g., 'USD')
    currencyLocal: string;      // Local currency code (e.g., 'PKR')
    estimatedDays: number;      // Delivery time estimate
    provider: string;           // Shipping carrier name
    providerImage75: string;    // Carrier logo (small)
    durationTerms: string;      // Human-readable delivery time
    servicelevel: {             // You'll need to expand this based on what servicelevel contains
      name?: string;
      token?: string;
    };
    test: boolean; 
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
