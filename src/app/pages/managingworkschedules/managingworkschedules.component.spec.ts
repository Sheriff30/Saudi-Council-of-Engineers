import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingworkschedulesComponent } from './managingworkschedules.component';

describe('ManagingworkschedulesComponent', () => {
  let component: ManagingworkschedulesComponent;
  let fixture: ComponentFixture<ManagingworkschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingworkschedulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagingworkschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
