import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  
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



  @Output() 
  addToRest= new EventEmitter <Restaurant> ();

  
  onSubmit(){
    this.addToRest.emit(this.profileForm.value)
  }
  
}
