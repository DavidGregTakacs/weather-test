import { Coordinates } from '../coordinates';

export interface ForecastResponseCity {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
