import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbranchComponent } from './addnewbranch.component';

describe('AddnewbranchComponent', () => {
  let component: AddnewbranchComponent;
  let fixture: ComponentFixture<AddnewbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewbranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
