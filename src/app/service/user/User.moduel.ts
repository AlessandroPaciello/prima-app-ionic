/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable id-blacklist */

import { BehaviorSubject, Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Booking } from "../booking/Booking.module";


export class User {

  email: string;
  password: string;
  name: string;
  lastName: string;
  age: number;
  country: string;
  img: string;
  id: number;
  private _booking: BehaviorSubject<Booking[]>;

  constructor(email: string, name: string, lastName: string, age: number, country: string, id?: number, img?: string,){
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    if (img) {
      this.img = img;
    }
    else{
      this.img = 'https://flyclipart.com/thumb2/login-account-icon-account-login-logn-with-png-935680.png';
    }
    if (id) {
      this.id = id;
    }
    else{
      this.id = null;
    }
    this._booking = new BehaviorSubject<Booking[]>([]);
  }


  setBooking(...booking: Booking[]) {
    this._booking.pipe(take(1)).subscribe((bookingArray) => {
      this._booking.next(bookingArray.concat(booking));
    });
  }

  public get booking(): Observable<Booking[]> {
    return this._booking.asObservable();
  }
}
