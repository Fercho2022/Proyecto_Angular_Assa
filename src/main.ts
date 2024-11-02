import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';




if (!navigator.geolocation){
  alert('Navegador no soporta Geolocatización');
  throw new Error('Navegador no soporta Geolocatización');

}

if(environment.production){
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
