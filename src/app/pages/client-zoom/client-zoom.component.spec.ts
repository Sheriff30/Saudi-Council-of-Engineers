import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientZoomComponent } from './client-zoom.component';

describe('ClientZoomComponent', () => {
  let component: ClientZoomComponent;
  let fixture: ComponentFixture<ClientZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientZoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
