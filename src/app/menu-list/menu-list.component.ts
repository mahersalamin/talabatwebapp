import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailsService } from '../details.service';
import { GetIDService } from '../get-id.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  rest_menu: Menu[] = [];

  menuItem: Menu[] = [];

  id: number;

  constructor(
    private router: ActivatedRoute,
    private idService: GetIDService,
    private menuItemService: DetailsService
  ) {
    this.id = idService._id;

    this.menuItemService._menuList.forEach((element) => {
      if (element.rest_id == this.id) {
        this.rest_menu.push(element);
        console.log(element)
      }
    });
  }
  ngOnInit(): void {
    this.menuItem = this.menuItemService._menuList;
  }
}
