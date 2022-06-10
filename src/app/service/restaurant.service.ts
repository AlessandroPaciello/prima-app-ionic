/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private _restaurants: Restaurant[] = [
    new Restaurant('01', 'Fronte Mare', 'Ottima vista e ottimi piatti', 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1c/79/23/ristorante-fronte-mare.jpg'),
    new Restaurant('02', 'Primo', 'Bellissimo ristorante situato vicino ai fossati', 'https://scontent.fbri1-1.fna.fbcdn.net/v/t1.6435-9/106031928_113584687075014_6491738107848043018_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=EDEmYShjzqoAX9DiBJT&_nc_ht=scontent.fbri1-1.fna&oh=00_AT9QPkDxX9VwqdKvDB4UcWgktRvq5cmj-lpPbgUw4_8eeQ&oe=62C4D329')
  ];

  constructor() {}
  get restaurants() {
    // eslint-disable-next-line no-underscore-dangle
    return this._restaurants;
  }

  find(id: string) {
    // eslint-disable-next-line arrow-body-style
    const rest = this.restaurants.find( (restaurant) => { return restaurant.restaurantId === id;});
    return rest;
  }


}
