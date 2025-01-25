import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfileuploadComponent } from './inputfileupload.component';

describe('InputfileuploadComponent', () => {
  let component: InputfileuploadComponent;
  let fixture: ComponentFixture<InputfileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputfileuploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
