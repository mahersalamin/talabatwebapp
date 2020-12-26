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
  orderURL: string = 'http://localhost:3000/orders';


  getRestaurants(): Observable<Object> {
    return this.http.get(this.restURL);
  }

  deleteRestaurant(id : any): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(this.restURL+'/'+id)
    return this.http.delete(this.restURL+'/'+id, httpOptions).pipe();
  }

  addRestaurants(body : any): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log("this is the body "+body)
    return this.http.post(this.restURL, body, httpOptions);
  }

  updateRestaurant(body: Restaurant , id :number): Observable<Object> { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put(this.restURL + '/'+id, body, httpOptions);
  }

  getMenus(): Observable<Object> {
    return this.http.get(this.menuURL);
  }

  getRestMenus(id: number): Observable<Object> {
    return this.http.get(this.menuURL + '/'+id);
  }

  addMenus(body:any): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
    return this.http.post(this.menuURL, body, httpOptions);
  }

  deletemenu(id : any): Observable<Object> {
    return this.http.delete(this.menuURL+'/'+id).pipe();
  }

  AddToOrder(order : Order): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.orderURL, order, httpOptions);
  }
  getOrders(id: number): Observable<Object> {
    return this.http.get(this.orderURL+'/'+id);
  }
  deleteOrder(id : any): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(this.orderURL+'/'+id)
    return this.http.delete(this.orderURL+'/'+id, httpOptions).pipe();
  }

}
