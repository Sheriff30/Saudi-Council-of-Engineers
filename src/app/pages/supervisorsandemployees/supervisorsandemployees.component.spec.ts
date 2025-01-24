import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorsandemployeesComponent } from './supervisorsandemployees.component';

describe('SupervisorsandemployeesComponent', () => {
  let component: SupervisorsandemployeesComponent;
  let fixture: ComponentFixture<SupervisorsandemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupervisorsandemployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorsandemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
