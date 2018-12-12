import { Component, OnInit } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: Item = {
    id: 1,
    name: "Mike Oranski",
    salary: "150000"
  };
  
  constructor() { }

  ngOnInit() {
  }

}
