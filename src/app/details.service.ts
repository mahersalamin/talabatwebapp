import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Order } from './order';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  _restaurant:Restaurant
  _menu:Menu
  _order:Order

  _restList:Restaurant[]=[
    new Restaurant(1,"ward","hebron","http://appback.ppu.edu/static/rest1.jpeg",31.31541,35.05328),
    new Restaurant(2,"zuwar","hebron","http://appback.ppu.edu/static/rest2.jpeg",31.31541,35.05328),
    new Restaurant(3,"Pizza Home","hebron","http://appback.ppu.edu/static/rest3.jpeg",31.31541,35.05328),
    new Restaurant(4,"Hebron Restaurant","hebron","http://appback.ppu.edu/static/rest4.jpg",31.31541,35.05328),
    new Restaurant(5,"City Restaurant","hebron","http://appback.ppu.edu/static/rest5.jpeg",31.31541,35.05328),
    new Restaurant(6,"Burger King","Beit Jala","http://appback.ppu.edu/static/rest6.jpeg",31.31541,35.05328)
  ]

  _menuList:Menu[]=[
    new Menu(1,1,"maklouba", "Good Maklouba Good Maklouba Falafel  MakloubaMaklouba" , "http://appback.ppu.edu/static/rest1.jpeg" , 50),
    new Menu(1,2,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/rest2.jpeg" , 50),
    new Menu(1,3,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/rest2.jpeg" , 50),
    new Menu(2,1,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/rest2.jpeg" , 50),
    new Menu(2,2,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/rest2.jpeg" , 50),
    new Menu(2,3,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/rest2.jpeg" , 50),
    new Menu(3,1,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/rest2.jpeg" , 50),

  ]

  constructor() { }

  set restautant(restaurant:Restaurant){
    this._restaurant=restaurant;
  }
  get restautant(){
    return this._restaurant
  }

  set menu(menu:Menu){
    this._menu=menu
  }
  get menu(){
    return this._menu
  }

  set order(order:Order){
    this._order=order
  }
  get order(){
    return this._order
  }

  set restList(restList:Restaurant[]){
    this._restList.push(this._restaurant);
  }
  get restList() :Restaurant[]{
    return this._restList
  }

  set menuList(menuList:Menu[]){
    this._menuList.push(this._menu)
  }
  get menuList() :Menu[]{
    return this._menuList
  }

}
