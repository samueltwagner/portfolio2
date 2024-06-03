import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { MapJobSearchComponent } from './map-job-search/map-job-search.component';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SpectrumsComponent } from './spectrums/spectrums.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapJobSearchComponent,
    SpectrumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
