import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 


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
    AddMenuComponent,
    EditRestaurantComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditRestaurantComponent]
})
export class AppModule { }
