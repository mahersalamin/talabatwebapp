import { Component, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { GetIDService } from '../get-id.service';
import { DetailsService } from '../details.service';
import { Restaurantrating } from '../restaurantrating';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  rate : Restaurantrating = new Restaurantrating();
  x :number = 0;
  constructor(
    private router: Router,
    private getIdFromService:GetIDService,
    private restDetail: DetailsService
    ) {

    }

  ngOnInit(): void {
  }
  
  @Input()
  rest:Restaurant
  

  onMenuClick(id : number){
    this.getIdFromService._id=id;
    this.router.navigate(['/menu/',id]);
  }

  onRateChange(x :number , rest: Restaurant) {
    this.rate.customer_id = 1;
    this.rate.rating = x;
    this.rate.rest_id = rest.id;

    this.restDetail.AddRating(this.rate).subscribe();
} 
}
