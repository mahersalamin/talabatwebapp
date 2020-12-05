import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  _order:Order
  constructor() { }

  ngOnInit(): void {
  }
  set order(order:Order){
    this._order=order
  }

}
