import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ListaVeicoliComponent } from './app/components/lista-veicoli/lista-veicoli.component'; // Importa il componente ListaVeicoliComponent
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom([BrowserAnimationsModule])]
})
  .catch(err => console.error(err));
