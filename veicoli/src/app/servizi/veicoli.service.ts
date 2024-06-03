import { Injectable } from '@angular/core';
import axios from 'axios';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VeicoliService {
  private apiUrl = 'http://localhost:3000/vehicles';

  async getVehicles(): Promise<Vehicle[]> {
    const response = await axios.get<Vehicle[]>(this.apiUrl); // Recupera tutti i veicoli
    return response.data;
  }

  async getVehicle(id: string): Promise<Vehicle> {
    const response = await axios.get<Vehicle>(`${this.apiUrl}/${id}`); // Recupera un veicolo per ID
    return response.data;
  }

  async createVehicle(vehicle: Vehicle): Promise<void> {
    const response = await axios.post(this.apiUrl, vehicle); // Crea un nuovo veicolo
    vehicle.id = response.data.id; // Assicura che l'ID assegnato dal server sia utilizzato
  }

  async updateVehicle(vehicle: Vehicle): Promise<void> {
    await axios.put(`${this.apiUrl}/${vehicle.id}`, vehicle); // Aggiorna un veicolo esistente
  }

  async deleteVehicle(id: string): Promise<void> {
    await axios.delete(`${this.apiUrl}/${id}`); // Elimina un veicolo
  }
  
}
