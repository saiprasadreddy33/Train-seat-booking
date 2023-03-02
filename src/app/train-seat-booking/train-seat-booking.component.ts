import { Component, OnInit } from '@angular/core';
import { TrainSeatBookingService } from '../train-seat-booking.service';
@Component({
  selector: 'app-train-seat-booking',
  templateUrl: './train-seat-booking.component.html',
  styleUrls: ['./train-seat-booking.component.less']
})
export class TrainSeatBookingComponent implements OnInit {
  trains: any[] = [];
  selectedTrain: any;
  bookedSeats: number[] = [];

  constructor(private trainService: TrainSeatBookingService) { }

  ngOnInit(): void {
    this.trains = this.trainService.getTrains();
  }

  selectTrain(train: any): void {
    this.selectedTrain = train;
  }

  bookSeat(seatNumber: number): void {
    this.bookedSeats.push(seatNumber);
  }

  isSeatBooked(seatNumber: number): boolean {
    return this.bookedSeats.includes(seatNumber);
  }

  resetBooking(): void {
    this.selectedTrain = null;
    this.bookedSeats = [];
  }
}
