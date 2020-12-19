import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl('id'),
    name: new FormControl('name'),
    link: new FormControl('link'),
    lat: new FormControl('latitude'),
    lng: new FormControl('langtitude'),
    city: new FormControl('city'),
    street: new FormControl('street'),
  });

  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
