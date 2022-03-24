import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectCityComponent } from './components/select-city/select-city.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SelectCityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
