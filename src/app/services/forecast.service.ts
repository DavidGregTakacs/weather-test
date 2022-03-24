import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForecastResponse } from '../interfaces/forecast/forecast-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiEndpoint = 'http://api.openweathermap.org/data/2.5/forecast?appid=fe3695759da76e0c9dcaf566634a08ed'

  constructor(
    private http: HttpClient,
  ) {
  }

  getForecastForCity(city: string): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(`${ this.apiEndpoint }&q=${ city }&units=metric`);
  }
}
