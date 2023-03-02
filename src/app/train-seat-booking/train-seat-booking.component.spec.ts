import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainSeatBookingComponent } from './train-seat-booking.component';

describe('TrainSeatBookingComponent', () => {
  let component: TrainSeatBookingComponent;
  let fixture: ComponentFixture<TrainSeatBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainSeatBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainSeatBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
