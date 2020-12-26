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
  errorMessage: String;
  constructor(private restDetail: DetailsService) {}

  ngOnInit(): void {
  
    this.restDetail.getRestaurants().subscribe(
      (restaurants: Restaurant[])=> {
        this.restList = restaurants;
      },
      (error: any)=> {
        console.log(error);
        this.errorMessage = error;
      }

    )
  }

  
}
