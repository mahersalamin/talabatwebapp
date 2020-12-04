import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  _menuItem:Menu;

  constructor() { }

  ngOnInit(): void {
  }
  @Input()

  set menuItem(menuItem:Menu){

    this._menuItem=menuItem;
    
  }

}
