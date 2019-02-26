import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sun-dropdown-menu',
  template: `
  <div [class]="class" [class.--focus]="open" (click)="draw()">
    <div class="sun-dropdown-item" [class.--focus]="open">
    {{ (item !== undefined)? item: title }}
    </div>
    <div class="sun-dropdown-container" [ngClass]="_attrs">
    <!--ng-content></ng-content-->
      <div *ngFor="let listItem of items" class="sun-dropdown-item"  [class.active]="listItem === item" (click)="select(listItem)" >
        {{listItem}} 
      </div>
      <div *ngIf="items === undefined || items.length === 0" class="sun-dropdown-item" [ngClass]="type">
       <i> _empty_ </i>
      </div>
    </div>
  </div>
  <!-- 
  This is code that renders the code for a dropdown selector.
  How it works:

      UI Toggle:

    <sun-dropdown-menu type="primary" [attrs]="['--large','--danger']"></sun-dropdown-menu>

  The * type * attribute is to specify which version of the button.
  The * attrs * is an array of conditions that will influence the feel    


      Passing Data for Rendering:

    <sun-dropdown-menu title="choose an item" [items]=" ['1st item','2nd item','3rd item']" (output)="get<AccessorMethod>($event)" ></sun-dropdown-menu>

  The * title * attribute is to specify the default text to be displayed on the dropdown.
  The * items * is an array of items that will be rendered on this element.
        [NB = Array Objects referencing: DropdownItem, String and Numbers are adviced.
          should you use any other refence class ensure that the toString() method has
          been overridden to whatever text state you would like to be represented.} 

  Note: ng-content doesn't get registered - data (to date) need to be passed in for 
  rendering.
  -->
  `
})
export class DropdownMenuComponent implements OnInit {
  // Data Input
  @Input()
  title: string;
  @Input()
  items: string[] | number[] | any[];
  @Output('output')
  output: EventEmitter<string | number | any> = new EventEmitter<string | number | any>();

  item: any;

  // Conditions
  open: boolean;
  // UI Attributes
  @Input()
  protected type: string;
  @Input()
  protected attrs: string[];


  constructor() {
  }

  ngOnInit() {
    if (this.title === undefined) {
      this.item, this.title = (this.items !== undefined && this.items.length > 0) ? this.items[0] : this.item;

    }
  }

  draw(): void {
    if (!this._attrs.includes('--disabled')) {
      this.open = !this.open;
    }
  }

  select(item: string | number | any): void {
    return this.output.emit(this.item = item);
  }



  get class(): string {
    return `sun-dropdown ${'sun-dropdown-' + this.type} ${
      this._attrs
      }`;
  }

  get _attrs(): string {
    return this.attrs ? this.attrs.join().replace(',', ' ') : '';
  }

}


// actions
