import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  _addRest:Restaurant;
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


  addRestaurantToList(){

    this.restList.push(this._addRest);  

  }

  @Output() 
  addToRest= new EventEmitter <Restaurant> ();
  
  

}
