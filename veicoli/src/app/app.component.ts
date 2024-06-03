import { Component } from '@angular/core';
import { GestioneVeicoliComponent } from './components/gestione-veicoli/gestione-veicoli.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GestioneVeicoliComponent],
  template: '<app-gestione-veicoli></app-gestione-veicoli>',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {}
