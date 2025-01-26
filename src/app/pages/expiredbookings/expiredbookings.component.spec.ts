import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredbookingsComponent } from './expiredbookings.component';

describe('ExpiredbookingsComponent', () => {
  let component: ExpiredbookingsComponent;
  let fixture: ComponentFixture<ExpiredbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiredbookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiredbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
