import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Restaurant } from '../restaurant';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
})
export class EditRestaurantComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl('id'),
    name: new FormControl('name'),
    link: new FormControl('link'),
    lat: new FormControl('latitude'),
    lng: new FormControl('langtitude'),
    city: new FormControl('city'),
    street: new FormControl('street'),
  });

  _restUpdate: Restaurant;

  restID: number;

  constructor(
    private restDetail: DetailsService,
    public dialogRef: MatDialogRef<EditRestaurantComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Restaurant
  ) {
    this._restUpdate = data;
    this.restID = data.id;
    console.log('restIDD is : ' + this.restID);
    console.log('ssss ' + this._restUpdate);
    console.log('data is ' + data);
    console.log('id is : ' + this._restUpdate.id);
  }

  ngOnInit(): void {}

  onUpdate(_restUpdate) {
    this._restUpdate = this.data;
    this.restID = this.data.id;
    

    //this.restDetail.UpdateRestaurant(this._restUpdate);
    
    
  }
}
