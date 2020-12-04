import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restList:Restaurant[]=[
    new Restaurant(1,"ward","hebron","http://appback.ppu.edu/static/rest1.jpeg",31.31541,35.05328),
    new Restaurant(2,"zuwar","hebron","http://appback.ppu.edu/static/rest2.jpeg",31.31541,35.05328),
    new Restaurant(3,"Pizza Home","hebron","http://appback.ppu.edu/static/rest3.jpeg",31.31541,35.05328),
    new Restaurant(4,"Hebron Restaurant","hebron","http://appback.ppu.edu/static/rest4.jpg",31.31541,35.05328),
    new Restaurant(5,"City Restaurant","hebron","http://appback.ppu.edu/static/rest5.jpeg",31.31541,35.05328),
    new Restaurant(6,"Burger King","Beit Jala","http://appback.ppu.edu/static/rest6.jpeg",31.31541,35.05328)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addToRestaurant(rest : Restaurant){
    this.restList.push(rest);
  }
}
