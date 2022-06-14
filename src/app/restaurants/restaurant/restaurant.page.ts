/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Booking } from 'src/app/service/booking/Booking.module';
import { Restaurant } from 'src/app/service/restaurant/restaurant.model';
import { RestaurantService } from 'src/app/service/restaurant/restaurant.service';
import { AccountService } from 'src/app/service/user/account-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  booking: FormGroup;
  restaurant: Restaurant;
  minDate: Date;
  maxDate: Date;


  constructor(private router: ActivatedRoute,private formBuilder: FormBuilder, private restaurantService: RestaurantService, private accountService: AccountService) { }

  ngOnInit() {
    this.router.paramMap.subscribe( (param) => {
      this.restaurant = this.restaurantService.find(param.get('restaurantId'));
    });
    this.booking = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
      numberPerson: ['', [Validators.required, Validators.pattern('^([1-9][0-9]?|100)$')]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate() + 14);
  }

  onBooking() {
    const date: Date = new Date(this.booking.value.date);
    const time: Date = new Date(this.booking.value.time);

    let minutes = time.getMinutes().toString()

    if (time.getMinutes() === 0) {
      minutes = '00';
    }

    const booking: Booking = {
      id : this.accountService.user.booking.length,
      date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      time: `${time.getHours()}:${minutes}`,
      numberPerson: this.booking.value.numberPerson,
      restaurant: this.restaurantService.find(this.restaurant.restaurantId),
      state: 'PENDING'
    }

    this.accountService.user.setBooking(booking);
  }

}
