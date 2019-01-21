import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveRegistrationComponent } from './drive-registration.component';

describe('DriveRegistrationComponent', () => {
  let component: DriveRegistrationComponent;
  let fixture: ComponentFixture<DriveRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
