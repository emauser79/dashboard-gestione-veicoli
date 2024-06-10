import { Component, OnInit } from '@angular/core';
import { ListaVeicoliComponent } from '../lista-veicoli/lista-veicoli.component';
import { FormVeicoliComponent } from '../form-veicoli/form-veicoli.component';
import { Vehicle } from '../../models/vehicle.model';
import { VeicoliService } from '../../servizi/veicoli.service';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../../primeng.module';

import { DashboardTrasportatoriComponent } from '../dashboard-trasportatori/dashboard-trasportatori.component';

@Component({
  selector: 'app-gestione-veicoli',
  standalone: true,
  templateUrl: './gestione-veicoli.component.html',
  imports: [CommonModule, ListaVeicoliComponent, FormVeicoliComponent, PrimeNGModule, DashboardTrasportatoriComponent,]
})
export class GestioneVeicoliComponent implements OnInit {
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;

  constructor(private veicoliService: VeicoliService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  async loadVehicles() {
    this.vehicles = await this.veicoliService.getVehicles();
  }

  onVehicleSaved(vehicle: Vehicle) {
    const index = this.vehicles.findIndex(v => v.id === vehicle.id);
    if (index > -1) {
      this.vehicles[index] = vehicle;
    } else {
      this.vehicles.push(vehicle);
    }
    this.selectedVehicle = null;
  }

  onEditVehicle(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    //per far tornare automaticamente alla pagina form
    this.scrollToForm();
  }

  onVehicleDeleted() {
    this.loadVehicles();
  }
  //per far tornare automaticamente alla pagina form
  scrollToForm() {
    const formElement = document.getElementById('form-veicoli-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
