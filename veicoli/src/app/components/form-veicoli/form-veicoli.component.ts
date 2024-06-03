import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VeicoliService } from '../../servizi/veicoli.service';
import { Vehicle } from '../../models/vehicle.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-veicoli',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-veicoli.component.html',
})
export class FormVeicoliComponent implements OnChanges {
  @Input() vehicle: Vehicle | null = null; // Veicolo attualmente in modifica o creazione
  @Input() vehicles: Vehicle[] = []; // Lista di tutti i veicoli
  @Output() vehicleSaved = new EventEmitter<Vehicle>(); // Evento emesso quando un veicolo viene salvato

  errorMessage: string = '';

  constructor(private veicoliService: VeicoliService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['vehicle'] && this.vehicle) {
      // Aggiorna il veicolo se ci sono cambiamenti
      this.vehicle = { ...this.vehicle };
    } else {
      // Resetta il form se non ci sono cambiamenti
      this.resetForm();
    }
  }

  async saveVehicle() {
    if (!this.vehicle) return;

    try {
      if (this.vehicle.id) {
        // Aggiorna un veicolo esistente
        await this.veicoliService.updateVehicle(this.vehicle);
      } else {
        // Crea un nuovo veicolo
        this.vehicle.id = this.generateUniqueId();
        await this.veicoliService.createVehicle(this.vehicle);
      }
      this.vehicleSaved.emit(this.vehicle); // Emmette l'evento vehicleSaved
      this.resetForm();
    } catch (error) {
      this.errorMessage = 'Errore durante il salvataggio del veicolo. Si prega di riprovare più tardi.';
    }
  }

  resetForm() {
    // Resetta il form a un nuovo veicolo vuoto
    this.errorMessage = '';
    this.vehicle = {
      id: '',
      tipo: '',
      capacita: 0,
      stato: 'disponibile',
      descrizioneManutenzione: '',
    };
  }

  generateUniqueId(): string {
    // Genera un ID univoco
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
