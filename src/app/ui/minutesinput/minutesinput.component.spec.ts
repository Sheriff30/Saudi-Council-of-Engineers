import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesinputComponent } from './minutesinput.component';

describe('MinutesinputComponent', () => {
  let component: MinutesinputComponent;
  let fixture: ComponentFixture<MinutesinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinutesinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutesinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
