import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';



const routes: Routes=[
  {path:'' , component: RestaurantListComponent},
  {path:'AddResturant' , component: AddRestaurantComponent},
  {path:'menu/:id‏',component: MenuListComponent},
  {path:'AddMenu' , component: AddMenuComponent},
  {path:'EditMenu/:id',component:EditMenuComponent},
  {path:'EditRestaurant/:id',component:EditRestaurantComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }