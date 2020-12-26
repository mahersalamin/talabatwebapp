import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Menu } from '../menu';
import { Restaurantrating } from '../restaurantrating';
import { Restaurant } from '../restaurant';

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

  restList :Restaurant []=[];
  menu:Menu = new Menu()
  responseText:string
  menuItem: Menu[] = [];
  rend_data: Menu = new Menu();


  constructor(private menuDetail:DetailsService) {
    this.menuDetail.getRestaurants().subscribe(
      (restaurants: Restaurant[])=> {
        this.restList = restaurants;
      },
      (error: any)=> {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.menuDetail.getMenus().subscribe(
      (menus: Menu[])=> {
        this.menuItem = menus;
      },
      (error: any)=> {
        console.log(error);
      }
    )



    console.log(this.restList);
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

  renderData(data : any){
    this.rend_data.id = data.id;
    this.rend_data.rest_id = data.rest_id;
    this.rend_data.name = data.name;
    this.rend_data.image = data.image;
    this.rend_data.descr = data.descr;
    this.rend_data.price = data.price;

    this.profileForm.patchValue({
      name: this.rend_data.name,
      link: this.rend_data.image,
      rest_id: this.rend_data.rest_id,
      descr: this.rend_data.descr,
      price: this.rend_data.price,
    });
  }

  Update(){
    this.menuDetail.updateMenu(this.profileForm.value, this.rend_data.id).subscribe(
      (data) => console.log(data),
      (error) => (this.responseText = error)
    );

    this.profileForm.reset({
      id:'',
      rest_id:'',
      name:'',
      image:'',
      descr:'',
      price:'',
    });
  }
}
