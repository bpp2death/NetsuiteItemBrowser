import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.itemService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.itemService.form.valid) {
      if(this.itemService.form.get('$key').value == null)
        this.itemService.insertItem(this.itemService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.itemService.form.reset();
    }
    //if (this.itemService.form.get('$key').value == null)
    //insert
    //else 
    //update
  }

}
