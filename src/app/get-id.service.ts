import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIDService {

  constructor() { }

  _id:number;

  set id(id:number){
    this._id=id;
  }

  get id(){
    return this._id;
  }
}
