import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firebase: AngularFireDatabase) { }
  itemList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('')
  });

  getItems() {
    this.itemList = this.firebase.list('items');
    return this.itemList.snapshotChanges();
  }

  insertItem(item) {
    this.itemList.push({
      fullname: item.fullname,
      email: item.email,
      mobile: item.mobile,
      location: item.location
    });
 
  }
}
