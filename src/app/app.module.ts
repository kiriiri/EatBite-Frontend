import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { CuisineComponent } from './cuisine/cuisine.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ListingComponent,
    HomeComponent,
    CityComponent,
    CuisineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
