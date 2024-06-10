import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from '../../../primeng.module';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-dashboard-trasportatori',
  standalone: true,
  imports: [CommonModule, FormsModule, PrimeNGModule],
  templateUrl: './dashboard-trasportatori.component.html',
  styleUrls: ['./dashboard-trasportatori.component.scss']
})
export class DashboardTrasportatoriComponent {
  @Input() vehicles: Vehicle[] = [];
  @Output() editVehicle = new EventEmitter<Vehicle>();
  @Output() vehicleDeleted = new EventEmitter<void>();

  missionDate: Date | null = null;
  selectedVehicleForMaintenance: any;
  maintenanceType: string = '';

  maintenanceTypes = [
    { label: 'Controllo olio', value: 'controllo-olio' },
    { label: 'Cambio gomme', value: 'cambio-gomme' },
    { label: 'Revisione', value: 'revisione' }
  ];

  planMission() {
    // Implementa la logica per pianificare la missione
    this.missionDate = null;
  }

  startMaintenance() {
    // Implementa la logica per avviare la manutenzione
    this.selectedVehicleForMaintenance = null;
    this.maintenanceType = '';
  }
}
