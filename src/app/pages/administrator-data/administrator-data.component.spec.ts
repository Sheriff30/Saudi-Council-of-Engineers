import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorDataComponent } from './administrator-data.component';

describe('AdministratorDataComponent', () => {
  let component: AdministratorDataComponent;
  let fixture: ComponentFixture<AdministratorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratorDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
