import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TrainSeatBookingComponent } from './train-seat-booking/train-seat-booking.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrainSeatBookingService } from './train-seat-booking/train-seat-booking.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TrainSeatBookingComponent,
        HeaderComponent,
        FooterComponent
      ],
      providers: [
        TrainSeatBookingService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Train Seat Booking'`, () => {
    expect(component.title).toEqual('Train Seat Booking');
  });

  it('should render the header component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
  });

  it('should render the train-seat-booking component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-train-seat-booking')).not.toBe(null);
  });

  it('should render the footer component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBe(null);
  });
});
