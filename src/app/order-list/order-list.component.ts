import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';
import { GetIDService } from '../get-id.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderItem: Order[] = [];
  errorMessage:string
  
  TotalPrice: number = 0;
  
  constructor(
    private router: ActivatedRoute,
    
    private orderItemService: DetailsService
  ) { 
    
  }

  ngOnInit(): void {
    this.orderItemService.getOrders(1).subscribe(
      (orders: Order[])=> {
        this.orderItem = orders;
      },
      (error: any)=> {
        console.log(error);
        this.errorMessage = error;
      }
    )

    // for(var ord of this.orderItem){
    //   this.TotalPrice += ord;
    // }
  }

  Confirm(){}

}
