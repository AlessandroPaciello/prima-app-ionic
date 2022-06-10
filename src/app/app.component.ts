/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AcountService } from './auth/acount-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private _isLogged = false;

  constructor(private navCtrl: NavController, private accountService: AcountService) {
    this._isLogged = this.accountService.accountIsAuth;
  }

  changeRoot(path: string) {
    this.navCtrl.navigateForward(path);
  }

  logOut() {
    this.accountService.logout();
    this.navCtrl.navigateBack('restaurants');
  }

  get isLogged() {
    return this._isLogged;
  }
}
