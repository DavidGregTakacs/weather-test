import { Pipe, PipeTransform } from '@angular/core';
import { ForecastResponseList } from '../interfaces/forecast/forecast-response-list';
import { from, groupBy, mergeMap, Observable, toArray } from 'rxjs';

@Pipe({
  name: 'separateRawListToDays'
})
export class SeparateRawListToDaysPipe implements PipeTransform {

  transform(value: ForecastResponseList[]): Observable<ForecastResponseList[][]> {
    return from(value).pipe(
      groupBy(data => (new Date(data.dt_txt)).getDate()),
      mergeMap(data => data.pipe(
        toArray(),
      )),
      toArray(),
    );
  }

}
