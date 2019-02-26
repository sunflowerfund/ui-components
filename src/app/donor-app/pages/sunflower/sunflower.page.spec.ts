import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunflowerPage } from './sunflower.page';

describe('SunflowerPage', () => {
  let component: SunflowerPage;
  let fixture: ComponentFixture<SunflowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunflowerPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunflowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
