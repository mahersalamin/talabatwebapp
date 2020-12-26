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
    image:new FormControl(''),
    descr:new FormControl(''),
    price:new FormControl(''),
  })

  menu:Menu = new Menu()
  responseText:string
  menuItem: Menu[] = [];

  constructor(private menuDetail:DetailsService) {}

  ngOnInit(): void {
    this.menuDetail.getMenus().subscribe(
      (menus: Menu[])=> {
        this.menuItem = menus;
      },
      (error: any)=> {
        console.log(error);
      }

    )
  }

  onSubmit(){
    this.menuDetail.addMenus(this.profileForm.value).subscribe(
      (data)=> console.log(),
      (error)=> this.responseText = error
    )
    this.profileForm.reset({
      id:'',
      rest_id:'',
      name:'',
      image:'',
      descr:'',
      price:'',
    })
  }

  delete(id : number){
    this.menuDetail.deletemenu(id).subscribe();
  }
}
