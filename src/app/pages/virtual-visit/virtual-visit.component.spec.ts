import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualVisitComponent } from './virtual-visit.component';

describe('VirtualVisitComponent', () => {
  let component: VirtualVisitComponent;
  let fixture: ComponentFixture<VirtualVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualVisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
