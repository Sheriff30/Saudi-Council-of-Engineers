import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchdataComponent } from './branchdata.component';

describe('BranchdataComponent', () => {
  let component: BranchdataComponent;
  let fixture: ComponentFixture<BranchdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
