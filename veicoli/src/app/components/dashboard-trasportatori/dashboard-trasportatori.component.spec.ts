import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrasportatoriComponent } from './dashboard-trasportatori.component';

describe('DashboardTrasportatoriComponent', () => {
  let component: DashboardTrasportatoriComponent;
  let fixture: ComponentFixture<DashboardTrasportatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTrasportatoriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTrasportatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
