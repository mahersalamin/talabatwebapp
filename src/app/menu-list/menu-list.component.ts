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
  

  menuItem: Menu[] = [];
  errorMessage:string

  id: number;
  getIdFromService: any;

  constructor(
    private router: ActivatedRoute,
    private idService: GetIDService,
    private menuItemService: DetailsService
  ) {
    this.id = idService._id;

    
  }
  ngOnInit(): void {
    this.menuItemService.getMenu().subscribe(
      (menus: Menu[])=> {
        this.menuItem = menus;
        console.log(JSON.stringify(this.menuItem));
      },
      (error: any)=> {
        console.log(error);
        this.errorMessage = error;
      }

    )
  }
  onEdit(id : number){
    this.getIdFromService._id=id;
    
  }
}
