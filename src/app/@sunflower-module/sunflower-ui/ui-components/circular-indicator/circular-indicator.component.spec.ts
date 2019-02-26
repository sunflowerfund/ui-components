import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularIndicatorComponent } from './circular-indicator.component';

describe('CircularIndicatorComponent', () => {
  let component: CircularIndicatorComponent;
  let fixture: ComponentFixture<CircularIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
