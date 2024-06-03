import { Component, OnInit } from '@angular/core';
import { ListaVeicoliComponent } from '../lista-veicoli/lista-veicoli.component';
import { FormVeicoliComponent } from '../form-veicoli/form-veicoli.component';
import { Vehicle } from '../../models/vehicle.model';
import { VeicoliService } from '../../servizi/veicoli.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestione-veicoli',
  standalone: true,
  imports: [CommonModule, ListaVeicoliComponent, FormVeicoliComponent],
  templateUrl: './gestione-veicoli.component.html',
  // styleUrls: ['./gestione-veicoli.component.css'],
})
export class GestioneVeicoliComponent implements OnInit {
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
