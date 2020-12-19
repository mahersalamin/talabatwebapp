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

  addRestaurants(): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body = {
      rest: Restaurant,
    };
    return this.http.post(this.restURL, body, httpOptions);
  }

  updateRestaurant(restaurant: Restaurant): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body = {
      rest: Restaurant,
    };
    return this.http.put(this.restURL, body, httpOptions);
  }

  getMenu(): Observable<Object> {
    return this.http.get(this.menuURL);
  }

  addMenus(): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body = {
      menu: Menu,
    };
    return this.http.post(this.menuURL, body, httpOptions);
  }
}
