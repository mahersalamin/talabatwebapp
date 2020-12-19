import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';
import { DetailsService } from '../details.service';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { EditRestaurantComponent } from '../edit-restaurant/edit-restaurant.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    link: new FormControl(''),
    lat: new FormControl(''),
    lng: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
  });

  restList: Restaurant = new Restaurant();
  responseText: string;
  errorMessage: string;
  reslis: Restaurant[] = [];

  constructor(private restDetail: DetailsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.restDetail.getRestaurants().subscribe(
      (restaurants: Restaurant[])=> {
        this.reslis = restaurants;
        console.log(JSON.stringify(this.reslis));
      },
      (error: any)=> {
        console.log(error);
        this.errorMessage = error;
      }

    )
    
  }

  openDialog(rest: Restaurant) {
    this.dialog.open(EditRestaurantComponent, {
      width: '50%',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { rest: Restaurant },
    });
  }
  // ظلت زي ما هي, بس في السيرفس  حذفت اشي كنت انت ضايفو, روح ع السيرفس 
  onSubmit() {
    console.log(JSON.stringify(this.restList));
    console.log(this.profileForm.value);

    this.restDetail.addRestaurants(this.profileForm.value).subscribe(
      (data) => console.log(data),
      (error) => (this.responseText = error)
    );

    this.profileForm.reset({
      id: '',
      name: '',
      link: '',
      lat: '',
      lng: '',
      city: '',
      street: '',
    });
  }

  // عشان تظهر المطاعم في الجدول عشان نقدر نعدل عليهن
  // اذا حطيت من سطر 73 لسطر 83 في الإن جي أون إنيت بطبعلك في الكونسول, بس بجيبش في الجدول لانو فويد
  //
  // getRest() {
  //   this.restDetail.getRestaurants().subscribe(
  //     (restaurants: Restaurant[]) => {
  //       this.reslis = restaurants;
  //       console.log(JSON.stringify(this.reslis));
  //       return JSON.stringify(this.reslis);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //       this.errorMessage = error;
  //     }
  //   );
  // }

  // delete(rest){
  //   this.restDetail.DeleteRestaurant(rest);
  // }
}
