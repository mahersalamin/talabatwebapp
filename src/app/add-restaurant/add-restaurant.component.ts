import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';
import { DetailsService } from '../details.service';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    link: new FormControl(''),
    lat: new FormControl(''),
    lng: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
  });

  rend_data: Restaurant = new Restaurant();
  responseText: string;
  errorMessage: string;
  reslis: Restaurant[] = [];

  constructor(private restDetail: DetailsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.restDetail.getRestaurants().subscribe(
      (restaurants: Restaurant[])=> {
        this.reslis = restaurants;
      },
      (error: any)=> {
        console.log(error);
        this.errorMessage = error;
      }
    )
  }

  onSubmit() {
    this.restDetail.addRestaurants(this.profileForm.value).subscribe(
      (data) => console.log(data),
      (error) => (this.responseText = error)
    );
    this.profileForm.reset({
      name: '',
      link: '',
      lat: '',
      lng: '',
      city: '',
      street: '',
    });
  }

  delete(id : number){
    this.restDetail.deleteRestaurant(id).subscribe();
  }

  renderData(data : any){
    this.rend_data.id = data.id;
    this.rend_data.city = data.city;
    this.rend_data.name = data.name;
    this.rend_data.image = data.image;
    this.rend_data.lng = data.lng;
    this.rend_data.lat = data.lat;
    this.rend_data.street = data.street;

    this.profileForm.patchValue({
      name: this.rend_data.name,
      link: this.rend_data.image,
      lat: this.rend_data.lat,
      lng: this.rend_data.lng,
      city: this.rend_data.city,
      street: this.rend_data.street,
    });
  }

  Update(){
    this.restDetail.updateRestaurant(this.profileForm.value, this.rend_data.id).subscribe(
      (data) => console.log(),
      (error) => (this.responseText = error)
    );

    this.profileForm.reset({
      name: '',
      link: '',
      lat: '',
      lng: '',
      city: '',
      street: '',
    });
  }
}
