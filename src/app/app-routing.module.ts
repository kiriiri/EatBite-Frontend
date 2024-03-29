import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { CustomerComponent } from './customer/customer.component';
import { CityComponent } from './city/city.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'city/:id', component: CityComponent },
  { path: 'cuisine/:id', component: CuisineComponent },
  {path:'customer', component: CustomerComponent},
  {path: 'city/:cityId/menus/:id', component: MenusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
