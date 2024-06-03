import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ListaVeicoliComponent } from './app/components/lista-veicoli/lista-veicoli.component'; // Importa il componente ListaVeicoliComponent

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
})
  .catch(err => console.error(err));
