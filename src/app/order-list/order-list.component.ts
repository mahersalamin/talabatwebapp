import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  _orderItem :Order;
  constructor() { }

  ngOnInit(): void {
  }
  @Input()

  set orderItem(orderItem:Order){
    this._orderItem=orderItem;
  }

}
