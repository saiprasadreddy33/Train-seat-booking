import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TrainSeatBookingModule } from './app/train-seat-booking/train-seat-booking.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TrainSeatBookingModule)
  .catch(err => console.error(err));
