import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeZoomComponent } from './employee-zoom.component';

describe('EmployeeZoomComponent', () => {
  let component: EmployeeZoomComponent;
  let fixture: ComponentFixture<EmployeeZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeZoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
