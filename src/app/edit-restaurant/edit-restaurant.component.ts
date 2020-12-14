import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Restaurant } from '../restaurant';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  profileForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    link:new FormControl(''),
    lat:new FormControl(''),
    lng:new FormControl(''),
    city:new FormControl(''),
    street:new FormControl('')
  });

  _restUpdate:any;

  constructor(private restDetail:DetailsService, public dialogRef: MatDialogRef<EditRestaurantComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Restaurant) { 
      this._restUpdate = data;
      console.log(this._restUpdate);
    }

  ngOnInit(): void {
  }

  onUpdate(rest){
    this.restDetail.UpdateRestaurant(rest);
  }

}
