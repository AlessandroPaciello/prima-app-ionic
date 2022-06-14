/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from '../booking/Booking.module';
import { Restaurant } from '../restaurant/restaurant.model';
import { User } from './User.moduel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accountIsAuth = true;
  private _user: User =  new User("alessandro.paciello25@gmail.com", 'Alessandro', 'Paciello', 25, 'IT', 'https://flyclipart.com/thumb2/login-account-icon-account-login-logn-with-png-935680.png', 0o1);

  constructor() {
    const booking01: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  new Restaurant('01', 'Fronte Mare', 'Ottima vista e ottimi piatti', 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1c/79/23/ristorante-fronte-mare.jpg'),
      state: 'ACCEPTED'
    }
    const booking02: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  new Restaurant('01', 'Fronte Mare', 'Ottima vista e ottimi piatti', 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1c/79/23/ristorante-fronte-mare.jpg'),
      state: 'DENIED'
    }

    const booking03: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  new Restaurant('01', 'Fronte Mare', 'Ottima vista e ottimi piatti', 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1c/79/23/ristorante-fronte-mare.jpg'),
      state: 'PENDING'
    }

    this.user.booking.push(booking01);
    this.user.booking.push(booking02);
    this.user.booking.push(booking03);
  }

  get accountIsAuth() {
    return this._accountIsAuth;
  }

  login() {
    this._accountIsAuth = true;
  }

  logout() {
    this._accountIsAuth = false;
  }

  public get user(): User {
    return this._user;
  }
}
