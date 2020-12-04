import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';



const routes: Routes=[
  {path:'' , component: RestaurantListComponent},
  {path:'AddResturant' , component: AddRestaurantComponent},
  {path:'Menu/:id‏',component: MenuListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
