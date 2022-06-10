/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcountService {

  private _accountIsAuth = false;
  name = 'Alessandro';
  lastName = 'Paciello';
  img = 'https://flyclipart.com/thumb2/login-account-icon-account-login-logn-with-png-935680.png';

  constructor() {}

  get accountIsAuth() {
    return this._accountIsAuth;
  }

  login() {
    this._accountIsAuth = true;
  }

  logout() {
    this._accountIsAuth = false;
  }
}
