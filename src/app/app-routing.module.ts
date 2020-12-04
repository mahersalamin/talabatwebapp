import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { MenuListComponent } from './menu-list/menu-list.component';



const routes: Routes=[

  {path:'restaurantDetails', component: AddRestaurantComponent},
  {path:'Menu',component: MenuListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
