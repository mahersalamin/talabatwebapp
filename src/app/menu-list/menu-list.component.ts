import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  rest_menu: Menu[];

  menuItem:Menu[] = [
    new Menu(1,1,"maklouba", "Good Maklouba Good Maklouba Falafel  MakloubaMaklouba" , "http://appback.ppu.edu/static/makloba.jpeg" , 50),
    new Menu(2,2,"Falafel", "Good Falafel Good Falafel Falafel  Falafel" , "http://appback.ppu.edu/static/falafel.jpeg" , 50),
  ];

  id:number;
  

  constructor(private router: ActivatedRoute) { 

    this.router.params.subscribe(params => {
      console.log(params['id'])
    })

    this.menuItem.forEach(element => {
          if(element.rest_id == this.id){
            this.rest_menu.push(element);
          }
        }
    );
  }
  ngOnInit(): void {
  }

  // @Input()
  // set menuItem(menuItem:Menu){
  //   this._menuItem=menuItem;
  // }

}
