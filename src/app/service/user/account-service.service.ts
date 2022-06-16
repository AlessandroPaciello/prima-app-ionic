/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { User } from './User.moduel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accountIsAuth = true;
  private _user: User =  new User("alessandro.paciello25@gmail.com", 'Alessandro', 'Paciello', 25, 'IT', 0o1);

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

  public get user(): User {
    return this._user;
  }
}
