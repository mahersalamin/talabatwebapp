import { Component, Input, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  
  constructor(private orderDetail:DetailsService,) { }

  ngOnInit(): void {
  }
  @Input()
  order:Order
  
  Confirm(){}
  delete(id:number){
    this.orderDetail.deleteOrder(id).subscribe
   
  }
}
