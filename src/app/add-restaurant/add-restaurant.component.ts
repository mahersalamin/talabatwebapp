import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  id:number;
  name:string;
  link:string;
  lat:number;
  lng:number;
  city:string;
  street:string;

  profileForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    link:new FormControl(''),
    lat:new FormControl(''),
    lng:new FormControl(''),
    city:new FormControl(''),
    street:new FormControl('')
  });


  _addRest:Restaurant;
  
  constructor() { }

  ngOnInit(): void {
  }

  addRestaurantToList(){

  }

  onSubmit(){
    console.log(this.profileForm.value)
  }

  @Output() 
  addToRest= new EventEmitter <Restaurant> ();
}
