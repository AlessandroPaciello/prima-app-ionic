/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
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


  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private accountService: AccountService,
    private allertCtrl: AlertController,
    private loadincCtrl: LoadingController,
    private toastController: ToastController,
    private httpClient: HttpClient
    ) { }

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

  async onBooking() {
    const date: Date = new Date(this.booking.value.date);
    const time: Date = new Date(this.booking.value.time);

    let minutes = time.getMinutes().toString()

    if (time.getMinutes() === 0) {
      minutes = '00';
    }

    const alert = await this.allertCtrl.create({
      buttons: [
        {
          text: 'conferma',
          role: 'CONFIRMED'
        },
        {
          text: 'Annulla',
          role: 'DENIED'
        }
      ],
      message: "vuoi confermare la prenotazione?"
    })

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (role === 'DENIED') {
      return
    }
    const booking: Booking = {
      id: null,
      date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      time: `${time.getHours()}:${minutes}`,
      numberPerson: this.booking.value.numberPerson,
      restaurant: this.restaurantService.find(this.restaurant.restaurantId),
      state: 'PENDING'
    }
   /*  this.httpClient.post('https://ionic-app-35f54-default-rtdb.europe-west1.firebasedatabase.app/booking.json', {...booking, id: null}).pipe(tap( (res) => {console.log(res)})).subscribe() */
    /* this.accountService.user.booking.pipe(take(1)).subscribe((bookingArray) => {

      const booking: Booking = {
        id : bookingArray.length,
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        time: `${time.getHours()}:${minutes}`,
        numberPerson: this.booking.value.numberPerson,
        restaurant: this.restaurantService.find(this.restaurant.restaurantId),
        state: 'PENDING'
      }
      return this.httpClient
        .post('https://ionic-app-35f54-default-rtdb.europe-west1.firebasedatabase.app/booking.json', {...{name: "Alessandro"}, id: null})
        .pipe(tap( res => console.log(res)))
      this.accountService.user.setBooking(booking);
    }) */

    const loadingCtrl = await this.loadincCtrl.create({spinner: 'lines', message: 'attendi, stiamo inviando la prenotazione'})
    await loadingCtrl.present()

    const source = timer(1500);
    source.subscribe(async () => {
      loadingCtrl.dismiss()
      const toats = await this.toastController.create({
        message: "richiesta di prenotazione inviata",
        duration: 2000
      });
      toats.present()
    })
  }
}
