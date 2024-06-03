import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeicoliComponent } from './lista-veicoli.component';

describe('ListaVeicoliComponent', () => {
  let component: ListaVeicoliComponent;
  let fixture: ComponentFixture<ListaVeicoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVeicoliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaVeicoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
