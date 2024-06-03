export interface Vehicle {
  id: string; // Cambiato da number a string
  tipo: string;
  capacita: number;
  stato: 'disponibile' | 'in manutenzione' | string;
  descrizioneManutenzione?: string;
  nuovaDescrizioneManutenzione?: string; // Campo opzionale per la nuova descrizione della manutenzione
}
