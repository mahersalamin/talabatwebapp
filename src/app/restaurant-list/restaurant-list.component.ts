import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restList: Restaurant[] =[]
  constructor(private restDetail: DetailsService) {}

  ngOnInit(): void {
    this.restList=this.restDetail.restList
  }

  // addToRestaurant() {
  //   console.log(this.restList.length);
  //   this.restDetail.restList.push;
  // }
}
