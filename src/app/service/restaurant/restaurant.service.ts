/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { find, map, take } from 'rxjs/operators';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private _restaurants: BehaviorSubject<Restaurant[]>;

  constructor() {
    this._restaurants = new BehaviorSubject<Restaurant[]>([]);
  }

  get restaurants(): Observable<Restaurant[]>{
    // eslint-disable-next-line no-underscore-dangle
    return this._restaurants.asObservable();
  }

  find(id: string): Restaurant {
    // eslint-disable-next-line arrow-body-style

    let findRestaurant: Restaurant;
    this.restaurants.pipe(take(1), map((restaurants) => { return restaurants.find( restaurant => restaurant.restaurantId === id);})).subscribe((restaurant) => {
      findRestaurant = restaurant;
    });
    return findRestaurant;
  }

  addRestaurant(...restaurant: Restaurant[]) {
    this._restaurants.pipe(take(1)).subscribe( (restaurants) => {
      this._restaurants.next(restaurants.concat(restaurant));
    });
  }


}
