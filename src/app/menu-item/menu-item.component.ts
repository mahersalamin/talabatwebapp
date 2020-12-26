import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { GetIDService } from '../get-id.service';
import { Menu } from '../menu';
import { Order } from '../order';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  
  ordr : Order = new Order();
  constructor(private router:Router,private getIdFromService:GetIDService, private order: DetailsService ) { 
    
  }

  ngOnInit(): void {
  }

  @Input()
  menu:Menu



  addToOrderList(m : Menu ){
    this.ordr.quantity = 1;
    this.ordr.rest_id = m.rest_id;
    this.ordr.menu_id = m.id;
    this.ordr.customer_id = 1;
    this.order.AddToOrder(this.ordr).subscribe(
      (data) => console.log(data)
    );
  }
  
  editMenuItem(id : number){
    this.getIdFromService._id=id;
    this.router.navigate(['/EditMenu/',id]);
  }

}
