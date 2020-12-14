import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FormGroup, FormControl } from '@angular/forms';
import { DetailsService } from '../details.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { EditRestaurantComponent } from '../edit-restaurant/edit-restaurant.component';



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
  restList: Restaurant[] =[]

  _addRest:Restaurant;
  
  constructor(private restDetail:DetailsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.restList=this.restDetail.restList;
  }


  openDialog(rest) {

    this.dialog.open(EditRestaurantComponent, {
      width: '50%',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { Resturant: rest }
    });
  }

  onSubmit(){
    this.restDetail.restList.push(this.profileForm.value)

    this.profileForm.reset({
      id:'',
      name:'',
      link:'',
      lat:'',
      lng:'',
      city:'',
      street:''
    });
  }

  delete(rest){
    this.restDetail.DeleteRestaurant(rest);
  }


}

