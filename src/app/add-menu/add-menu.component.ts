import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  profileForm = new FormGroup({
    id:new FormControl(''),
    rest_id:new FormControl(''),
    name:new FormControl(''),
    link:new FormControl(''),
    desc:new FormControl(''),
    price:new FormControl(''),
  })

  
  menu:Menu = new Menu()
  responseText:string

  constructor(private menuDetail:DetailsService) {
    
   }

  ngOnInit(): void {
    //this.menuList=this.menuDetail.menuList
  }

  onSubmit(){
    console.log(JSON.stringify(this.menu));
    
    this.menuDetail.addRestaurants().subscribe(
      (data)=> this.responseText = JSON.stringify(this.profileForm.value),
      (error)=> this.responseText = error
    )
    console.log(this.responseText)

    this.profileForm.reset({
      id:'',
      rest_id:'',
      name:'',
      link:'',
      desc:'',
      price:'',
    })
    

    
  }
    
  

  

}
