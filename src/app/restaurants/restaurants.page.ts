/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Restaurant } from '../service/restaurant.model';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  private _restaurant: Restaurant[];

  constructor(private restaurantService: RestaurantService ) { }

  ngOnInit() {
    this._restaurant = this.restaurantService.restaurants;
  }

  public get restaurant() {
    return this._restaurant;
  }

}
