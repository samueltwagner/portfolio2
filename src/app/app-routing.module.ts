import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapJobSearchComponent } from './map-job-search/map-job-search.component';
import { NgModule } from '@angular/core';
import { SpectrumsComponent } from './spectrums/spectrums.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job-search', component: MapJobSearchComponent },
  { path: 'spectrums', component: SpectrumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
