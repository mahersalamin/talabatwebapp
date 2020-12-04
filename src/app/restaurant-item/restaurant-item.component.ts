import { Component, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  _restaurant: Restaurant;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  @Input()

  set restItem(restItem:Restaurant){
    this._restaurant=restItem;
  }

  onMenuClick(id : number){
    this.router.navigate([`/Menu/${id}`]);
  }

  onEdit(){}


}
