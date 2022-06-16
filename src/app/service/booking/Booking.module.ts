/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eol-last */

import { Restaurant } from "../restaurant/restaurant.model";

export interface Booking {
  id?: number;
  date: string;
  time: string;
  numberPerson: number;
  restaurant: Restaurant;
  state: 'DENIED' | 'PENDING' | 'ACCEPTED';
}
