/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService} from './service/user/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private _account: AccountService;

  constructor(private navCtrl: NavController, private accountService: AccountService) {
    this._account = this.accountService;
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
