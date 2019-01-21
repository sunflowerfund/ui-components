import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sun-dropdown-menu',
  template: `<h1>Hello input</h1>`
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
  public open: boolean;
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
