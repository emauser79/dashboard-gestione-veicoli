import { Component, OnInit } from '@angular/core';
import { ListaVeicoliComponent } from './components/lista-veicoli/lista-veicoli.component';
import { FormVeicoliComponent } from './components/form-veicoli/form-veicoli.component';
import { Vehicle } from './models/vehicle.model';
import { VeicoliService } from './servizi/veicoli.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaVeicoliComponent, FormVeicoliComponent],
  template: `
    <h1>Gestione Veicoli</h1>
    <app-form-veicoli
      [vehicle]="selectedVehicle"
      (vehicleSaved)="onVehicleSaved($event)"
    ></app-form-veicoli>
    <app-lista-veicoli
      [vehicles]="vehicles"
      (editVehicle)="onEditVehicle($event)"
      (vehicleDeleted)="onVehicleDeleted()"
    ></app-lista-veicoli>
  `,
})
export class AppComponent implements OnInit {
  vehicles: Vehicle[] = []; // Lista dei veicoli
  selectedVehicle: Vehicle | null = null; // Veicolo selezionato per la modifica

  constructor(private veicoliService: VeicoliService) {}

  ngOnInit() {
    this.loadVehicles(); // Carica i veicoli al caricamento del componente
  }

  async loadVehicles() {
    this.vehicles = await this.veicoliService.getVehicles(); // Recupera tutti i veicoli
  }

  onVehicleSaved(vehicle: Vehicle) {
    const index = this.vehicles.findIndex(v => v.id === vehicle.id);
    if (index > -1) {
      // Aggiorna il veicolo nella lista se esiste
      this.vehicles[index] = vehicle;
    } else {
      // Aggiunge il nuovo veicolo alla lista
      this.vehicles.push(vehicle);
    }
    this.selectedVehicle = null; // Resetta il veicolo selezionato
  }

  onEditVehicle(vehicle: Vehicle) {
    this.selectedVehicle = vehicle; // Seleziona un veicolo per la modifica
  }

  onVehicleDeleted() {
    this.loadVehicles(); // Ricarica i veicoli dopo un'eliminazione
  }
}
