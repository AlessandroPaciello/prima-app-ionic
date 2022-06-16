/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Restaurant } from '../service/restaurant/restaurant.model';
import { RestaurantService } from '../service/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit, OnDestroy {

  private _restaurants: Restaurant[];
  private _restaurantsSub: Subscription;

  constructor(private restaurantService: RestaurantService ) { }

  ngOnInit() {
    this._restaurantsSub = this.restaurantService.restaurants.pipe(take(1)).subscribe( (restaurants) => {
      this._restaurants = restaurants;
    });
  }

  public get restaurants() {
    return this._restaurants;
  }

  ngOnDestroy(): void {
    if (this._restaurantsSub) {
      this._restaurantsSub.unsubscribe();
    }
  }

}
