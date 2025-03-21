import { ShipEngine } from 'shipengine';

if (!process.env.SHIPENGINE_API_KEY) {
  throw new Error('SHIPENGINE_API_KEY is not set in the environment variables');
}

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY);

export default shipengine;

