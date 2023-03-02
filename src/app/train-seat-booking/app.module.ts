import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrainSeatBookingComponent } from './train-seat-booking/train-seat-booking.component';
import { TrainSeatBookingService } from './train-seat-booking/train-seat-booking.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainSeatBookingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TrainSeatBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
