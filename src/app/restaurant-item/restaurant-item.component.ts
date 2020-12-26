import { Component, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { GetIDService } from '../get-id.service';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  x :number = 3;
  constructor(
    private router: Router,
    private getIdFromService:GetIDService,) {

    }

  ngOnInit(): void {
  }
  
  @Input()
  rest:Restaurant
  

  onMenuClick(id : number){
    this.getIdFromService._id=id;
    this.router.navigate(['/menu/',id]);
  }
}
