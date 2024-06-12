// lista-veicoli.component.ts
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VeicoliService } from '../../servizi/veicoli.service';
import { Vehicle } from '../../models/vehicle.model';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../../primeng.module';

@Component({
  selector: 'app-lista-veicoli',
  standalone: true,
  imports: [CommonModule, PrimeNGModule],
  templateUrl: './lista-veicoli.component.html',
  styleUrls: ['./lista-veicoli.component.scss']
})
export class ListaVeicoliComponent implements OnInit {
  @Input() vehicles: Vehicle[] = [];
  @Output() editVehicle = new EventEmitter<Vehicle>();
  @Output() vehicleDeleted = new EventEmitter<void>();

  constructor(private veicoliService: VeicoliService) {}

  async ngOnInit() {
    this.vehicles = await this.veicoliService.getVehicles();
  }

  async deleteVehicle(id: string) {
    try {
      await this.veicoliService.deleteVehicle(id);
      this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
      this.vehicleDeleted.emit();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  }

  onEditVehicle(vehicle: Vehicle) {
    this.editVehicle.emit(vehicle);
  }

  async setInManutenzione(vehicle: Vehicle) {
    try {
      vehicle.stato = 'in manutenzione';
      await this.veicoliService.updateVehicle(vehicle);
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  }
}
