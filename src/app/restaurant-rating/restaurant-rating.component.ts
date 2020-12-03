import { Component, Input, OnInit } from '@angular/core';
import { Restaurantrating } from '../restaurantrating';

@Component({
  selector: 'app-restaurant-rating',
  templateUrl: './restaurant-rating.component.html',
  styleUrls: ['./restaurant-rating.component.css']
})
export class RestaurantRatingComponent implements OnInit {


  restRate:Restaurantrating;
  _rating: number;
  stars: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set rating(rating: number){
    this._rating = rating;
    let j = Math.floor(this._rating);
    console.log("j = " + j);
    for(let i=0;i<j;i++){
      this.stars[i] = i;
    }
  }


}
