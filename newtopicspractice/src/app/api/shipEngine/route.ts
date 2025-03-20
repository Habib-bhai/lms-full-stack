type HeadersType = {
    [key: string]: string;
  };
  
  const myHeaders = new Headers();
  myHeaders.append("Host", "api.shipengine.com");
  myHeaders.append("API-Key", "TEST_lH/zwadItB/obTyNE4crmZItKMpd2CW5hox3eiRWt/g");
  myHeaders.append("Content-Type", "application/json");
  
  const raw: string = JSON.stringify({
    shipment: {
      carrier_id: "se-123456",
      service_code: "ups_ground",
      ship_to: {
        name: "Jane Doe",
        phone: "+1 444-444-4444",
        email: "recipient@example.com",
        address_line1: "525 S Winchester Blvd",
        city_locality: "San Jose",
        state_province: "CA",
        postal_code: "95128",
        country_code: "US",
        address_residential_indicator: "yes",
      },
      ship_from: {
        name: "John Doe",
        company_name: "Example Corp",
        phone: "+1 555-555-5555",
        email: "sender@example.com",
        address_line1: "4301 Bull Creek Rd",
        city_locality: "Austin",
        state_province: "TX",
        postal_code: "78731",
        country_code: "US",
        address_residential_indicator: "no",
      },
      packages: [
        {
          weight: {
            value: 20,
            unit: "ounce",
          },
          dimensions: {
            height: 6,
            width: 12,
            length: 24,
            unit: "inch",
          },
        },
      ],
    },
  });
  
  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  
  fetch("https://api.shipengine.com/v1/labels", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  