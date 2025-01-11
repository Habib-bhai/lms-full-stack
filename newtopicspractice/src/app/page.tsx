import Image from "next/image";
import { Shippo } from "shippo";


const shippo = new Shippo({apiKeyHeader: 'shippo_test_fbf1b6d26c65e59abf9c3b5599a512b3ca4dd717'});
const addressFrom = await shippo.addresses.create({
    name: "Shawn Ippotle",
    company: "Shippo",
    street1: "215 Clayton St.",
    city: "San Francisco",
    state: "CA",
    zip: "94117",
    country: "US", // iso2 country code
    phone: "+1 555 341 9393",
    email: "shippotle@shippo.com",
});

const parcel = await shippo.parcels.create({
  extra: {
    cod: {
      amount: "5.5",
      currency: "USD",
      paymentMethod: "CASH",
    },
    insurance: {
      amount: "5.5",
      content: "Laptop",
      currency: "USD",
      provider: "UPS",
    },
  },
  metadata: "Customer ID 123456",
  massUnit: "lb",
  weight: "1",
  distanceUnit: "in",
  height: "1",
  length: "1",
  width: "1",   
})


const abc = await shippo.addresses.get("8bc4952521c14cb2a2d8749ebd463f04")


const shipments = await shippo.shipments.list({})

export default async function Home() {


  console.log("shipment data->>>>>",shipments)
  // console.log("parcel data->>>>>",parcel)
// console.log(abc)
// console.log(abc)


  return (
    <h1  style={{ textAlign: "center" }}>
      hello world
      </h1>  
  );
}
