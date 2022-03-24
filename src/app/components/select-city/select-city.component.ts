import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, distinctUntilChanged, filter, of, shareReplay, Subject, switchMap } from 'rxjs';
import { ForecastService } from '../../services/forecast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCityComponent implements OnInit {

  public citySelector = new FormControl(null);
  public availableCities = ['London', 'Birmingham', 'Cardiff'];

  public forecastForSelectedCity$ = this.citySelector.valueChanges.pipe(
    filter(city => !!city),
    distinctUntilChanged(),
    switchMap(city => this.forecastService.getForecastForCity(city).pipe(
      catchError(error => {
        this.errorSubject.next(error);
        return of(error);
      })
    )),
    shareReplay(),
  );

  private errorSubject = new Subject<HttpErrorResponse>();
  public error$ = this.errorSubject.asObservable();


  constructor(
    private forecastService: ForecastService,
  ) {
  }

  ngOnInit(): void {
  }
}
