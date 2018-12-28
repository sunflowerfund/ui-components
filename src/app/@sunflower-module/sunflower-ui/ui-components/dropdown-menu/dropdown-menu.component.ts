import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'sun-dropdown-menu',
  template: `
  <div class="sun-dropdown"  [class.--focus]="open" (click)="draw()" (blur)="draw()">
    <div class="sun-dropdown-item"  [class.--focus]="open">
    {{ (item !== undefined)? item: title }}
    </div>
    <div class="sun-dropdown-container">
    <ng-content></ng-content>
      <div *ngFor="let item of items" class="sun-dropdown-item" [class.active]="item === title" (click)="select(item)" >
        {{item}}
      </div>
      <div *ngIf="items === undefined || items === 0" class="sun-dropdown-item">
       <i> _empty_ </i>
      </div>
    </div>
  </div>
  <input [(ngModel)]="title"/>
  {{item}}
  `
})
export class DropdownMenuComponent implements OnInit {
@Input()
  title:string;
@Input()
  items: string[]|number[]|any[];
@Output('Value')
  option: EventEmitter<string|number|any> = new EventEmitter<string|number|any>()
 
  item:string|number|any;

  // Conditions
   private open:boolean;


  constructor() { 
  }

  ngOnInit() {    
    if (this.title === undefined){
      this.item, this.title =  (this.items!==undefined && this.items.length > 0)?this.items[0]:this.item;
      
    }
  }

  draw():void{
    this.open = !this.open;
  }

  select(item:string|number|any):void{
    this.item = item;
    this.option .emit(this.item);
  }

  // The following are 

}


// actions