import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';
import { DetailsService } from '../details.service';


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
  
  constructor(private restDetail:DetailsService) { }

  ngOnInit(): void {
  }



  // @Output() 
  // addToRest= new EventEmitter <any> ();


  
  onSubmit(){
    //عشان يطبع الاوبجكت اللي تمت اضافته
    console.log(this.profileForm.value)
    this.restDetail.restList.push(this.profileForm.value)
    //عشان يطبع طول الليست الجديد
    console.log(this.restDetail.restList.length)
    // this.addToRest.emit(this.profileForm.value);
  }
  
}
