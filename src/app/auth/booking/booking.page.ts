/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Booking } from 'src/app/service/booking/Booking.module';
import { RestaurantService } from 'src/app/service/restaurant/restaurant.service';
import { AccountService } from 'src/app/service/user/account-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit, OnDestroy {

  private _account: AccountService;
  private _reservations: Booking[];
  private _bookingSub: Subscription;

  constructor(private accountService: AccountService, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this._account = this.accountService;
    this._bookingSub = this.accountService.user.booking.pipe(take(1)).subscribe((bookingArray) => {
      this._reservations = bookingArray;
    });
  }

  public get account(): AccountService {
    return this._account;
  }

  stateColor(booking: Booking): string {
    const state = booking.state;

    switch(state) {
      case 'ACCEPTED': {
        return 'success';
      }
      case 'PENDING': {
        return 'warning';
      }
      case 'DENIED': {
        return 'danger';
      }
    }
  }

  public get reservations(): Booking[] {
    return this._reservations;
  }

  ngOnDestroy(): void {
    if (this._bookingSub) {
      this._bookingSub.unsubscribe();
    }
  }

}
