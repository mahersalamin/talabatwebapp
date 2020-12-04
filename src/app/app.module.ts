import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantItemComponent } from './restaurant-item/restaurant-item.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRatingComponent } from './restaurant-rating/restaurant-rating.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantItemComponent,
    RestaurantListComponent,
    RestaurantRatingComponent,
    OrderListComponent,
    AddRestaurantComponent,
    MenuListComponent,
    MenuItemComponent,
    OrderItemComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
