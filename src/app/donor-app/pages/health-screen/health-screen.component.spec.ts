import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthScreenComponent } from './health-screen.component';

describe('HealthScreenComponent', () => {
  let component: HealthScreenComponent;
  let fixture: ComponentFixture<HealthScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
