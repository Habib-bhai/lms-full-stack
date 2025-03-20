import { Shippo } from "shippo";

const shippo  = new  Shippo({apiKeyHeader: `${process.env.SHIPPO_TOKEN}`})

export default shippo