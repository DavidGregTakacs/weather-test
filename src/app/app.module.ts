import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeparateRawListToDaysPipe } from './pipes/separate-raw-list-to-days.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    ForecastComponent,
    SeparateRawListToDaysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
