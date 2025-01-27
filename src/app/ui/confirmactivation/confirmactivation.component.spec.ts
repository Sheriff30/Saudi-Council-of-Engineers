import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmactivationComponent } from './confirmactivation.component';

describe('ConfirmactivationComponent', () => {
  let component: ConfirmactivationComponent;
  let fixture: ComponentFixture<ConfirmactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmactivationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
