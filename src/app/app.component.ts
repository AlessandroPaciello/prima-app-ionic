/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Booking } from './service/booking/Booking.module';
import { Restaurant } from './service/restaurant/restaurant.model';
import { RestaurantService } from './service/restaurant/restaurant.service';
import { AccountService} from './service/user/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private _account: AccountService;

  constructor(private navCtrl: NavController, private accountService: AccountService, private restaurantService: RestaurantService) {
    this._account = this.accountService;

    const restaurant01 = new Restaurant('01', 'Fronte Mare', 'Ottima vista e ottimi piatti', 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1c/79/23/ristorante-fronte-mare.jpg');
    const restaurant02 = new Restaurant('02', 'Primo', 'Bellissimo ristorante situato vicino al fossato', 'https://scontent.fbri1-1.fna.fbcdn.net/v/t1.6435-9/106031928_113584687075014_6491738107848043018_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=EDEmYShjzqoAX9DiBJT&_nc_ht=scontent.fbri1-1.fna&oh=00_AT9QPkDxX9VwqdKvDB4UcWgktRvq5cmj-lpPbgUw4_8eeQ&oe=62C4D329');
    const restaurant03 = new Restaurant('03', 'L\' ora di mezzo', 'Bellissimo locale situato nel cuore del centro storico', 'https://media-cdn.tripadvisor.com/media/photo-s/06/3c/1e/ef/l-ora-di-mezzo.jpg');

    this.restaurantService.addRestaurant(restaurant01, restaurant02, restaurant03);

    const booking01: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  this.restaurantService.find('01'),
      state: 'ACCEPTED'
    };
    const booking02: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  this.restaurantService.find('02'),
      state: 'DENIED'
    };

    const booking03: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  this.restaurantService.find('03'),
      state: 'PENDING'
    };
    const booking04: Booking = {
      id: 1,
      date: '14-06-2022',
      time: '22:00',
      numberPerson: 4,
      restaurant:  this.restaurantService.find('03'),
      state: 'PENDING'
    };

    this.accountService.user.setBooking(booking01, booking02, booking03, booking04);
  }

  changeRoot(path: string) {
    this.navCtrl.navigateForward(path);
  }

  logOut() {
    this.accountService.logout();
    this.navCtrl.navigateBack('restaurants');
  }

  get account() {
    return this._account;
  }
}
