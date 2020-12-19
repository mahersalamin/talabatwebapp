import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetIDService } from '../get-id.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  _menuList : Menu;
  resturant_id: number;

  constructor(private router:Router,private getIdFromService:GetIDService ) { 
    
  }

  ngOnInit(): void {
  }

  @Input()
  menu:Menu
  // set menuList(men : Menu){
  //   this._menuList = men;
  // }


  addToOrderList(){

  }
  
  editMenuItem(id : number){
    this.getIdFromService._id=id;
    this.router.navigate(['/EditMenu/',id]);
  }
 

}
