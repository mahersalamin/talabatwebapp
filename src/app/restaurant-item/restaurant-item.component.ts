import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  _restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }
  @Input()

  set restItem(restItem:Restaurant){
    this._restaurant=restItem;
  }



}
