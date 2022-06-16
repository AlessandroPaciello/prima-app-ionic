/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountService } from '../service/user/account-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  private _account: any;
  loading = false;

  userLogin: FormGroup;
  private _bookingCount: number;

  constructor(private accountService: AccountService, private navCtrl: NavController, private formBuilder: FormBuilder, private loadingController: LoadingController) {
  }

  ngOnInit() {
    this._account = this.accountService;

    // costruisce l'oggetto che verifica se i dati inseriti nel form sono corretti
    this.userLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ionViewWillEnter() {
    this.accountService.user.booking.pipe(take(1)).subscribe((bookingArray) => {
      this._bookingCount = bookingArray.length;
    });
  }

  async login() {
    if (this.userLogin.valid) {
      this.loading = true;
      const loading = await this.loadingController.create({spinner: 'lines', message: 'attendi il Caricamento'});
      await loading.present();
      setTimeout(() => {
        this.loading = false;
        loading.dismiss();
        this.accountService.login();
        this._account = this.accountService;
        this.navCtrl.navigateBack('/restaurants');
      }, 1500);
    }
  }

  logOut() {
    this.accountService.logout();
    this._account = this.accountService;
  }

  get account() {
    return this._account;
  }

  public get bookingCount(): number {
    return this._bookingCount;
  }
}
