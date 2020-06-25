import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
import { defineCustomElements } from 'stencil-components-playground/loader';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

defineCustomElements(window, {
  exclude: ['ion-tabs', 'ion-tab'],
});
