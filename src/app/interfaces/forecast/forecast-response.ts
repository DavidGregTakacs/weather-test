import { ForecastResponseCity } from './forecast-response-city';
import { ForecastResponseList } from './forecast-response-list';

export interface ForecastResponse {
  cnt: number;
  cod: string;
  message: number;
  city: ForecastResponseCity;
  list: ForecastResponseList[];
}
