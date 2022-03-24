import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastResponse } from '../../interfaces/forecast/forecast-response';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input() source: ForecastResponse | undefined;

}
