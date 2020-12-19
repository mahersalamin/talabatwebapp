import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './menu';
import { Order } from './order';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}
  _restaurant: Restaurant;
  _menu: Menu;
  _order: Order;
  restURL: string = 'http://localhost:3000/restaurant';
  menuURL: string = 'http://localhost:3000/menu';

  getRestaurants(): Observable<Object> {
    return this.http.get(this.restURL);
  }

  addRestaurants(body : any): Observable<Object> {
    //هاظ اللي حذفتو, من المطعم والمنيو
    // let body = {
    //  rest: Restaurant,
    //};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log("this is the body "+body)
    return this.http.post(this.restURL, body, httpOptions);
  }

  updateRestaurant(body: any): Observable<Object> { 
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put(this.restURL, body, httpOptions);
  }

  getMenu(): Observable<Object> {
    return this.http.get(this.menuURL);
  }

  addMenus(body:any): Observable<Object> {
    // let body = {
    //  menu: Menu,
    //};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
    return this.http.post(this.menuURL, body, httpOptions);
  }
}
