import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  _menuList : Menu;
  resturant_id: number;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  @Input()
  set menuList(men : Menu){
    this._menuList = men;
  }

  set restID( id: number){
    this.resturant_id = id;
  }

}
