import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVeicoliComponent } from './form-veicoli.component';

describe('FormVeicoliComponent', () => {
  let component: FormVeicoliComponent;
  let fixture: ComponentFixture<FormVeicoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVeicoliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVeicoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
