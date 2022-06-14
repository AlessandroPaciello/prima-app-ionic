/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/service/booking/Booking.module';
import { RestaurantService } from 'src/app/service/restaurant/restaurant.service';
import { AccountService } from 'src/app/service/user/account-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  private _account: AccountService;
  constructor(private accountService: AccountService, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this._account = this.accountService;
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
}
