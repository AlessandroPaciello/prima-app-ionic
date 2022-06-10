/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AcountService } from './acount-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  private _account: any;
  loading = false;

  constructor(private accountService: AcountService, private navCtrl: NavController, private loadingController: LoadingController) {
  }

  ngOnInit() {
    this._account = this.accountService;
  }

  async login() {
    this.loading = true;
    /* const loading = await this.loadingController.create({duration: 2000});
    await loading.present(); */
    setTimeout(() => {
      this.loading = false;
      this.accountService.login();
      this._account = this.accountService;
      this.navCtrl.navigateBack('/restaurants');
    }, 1500);
  }

  logOut() {
    this.accountService.logout();
    this._account = this.accountService;
  }

  get account() {
    return this._account;
  }

}
