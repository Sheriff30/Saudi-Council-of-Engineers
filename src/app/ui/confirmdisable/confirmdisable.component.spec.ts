import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdisableComponent } from './confirmdisable.component';

describe('ConfirmdisableComponent', () => {
  let component: ConfirmdisableComponent;
  let fixture: ComponentFixture<ConfirmdisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmdisableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmdisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
