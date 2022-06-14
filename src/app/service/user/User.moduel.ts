/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable id-blacklist */

import { Booking } from "../booking/Booking.module";

/* eslint-disable eol-last */
export class User {

  email: string;
  password: string;
  name: string;
  lastName: string;
  age: number;
  country: string;
  img: string;
  id: number;
  booking: Booking[] = [];


  constructor(email: string, name: string, lastName: string, age: number, country: string, img: string, id: number){
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.img = img;
    this.id = id;
  }

  setBooking(booking: Booking) {
    this.booking.push(booking);
  }
}
