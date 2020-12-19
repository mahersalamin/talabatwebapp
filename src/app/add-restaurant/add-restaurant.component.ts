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


  restList: Restaurant=new Restaurant()
  responseText:string
  
  constructor(private restDetail:DetailsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    
  }


  openDialog(rest:Restaurant) {

    this.dialog.open(EditRestaurantComponent, {
      width: '50%',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { rest: Restaurant }
    });
  }

  onSubmit(){
    console.log("hbsdbfkhs")
    console.log(JSON.stringify(this.restList));
    
    this.restDetail.addRestaurants().subscribe(
      (data)=> this.responseText = JSON.stringify(this.profileForm.value),
      (error)=> this.responseText = error
    )
    console.log(this.responseText)
    

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

  // delete(rest){
  //   this.restDetail.DeleteRestaurant(rest);
  // }


}

