/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AccountService } from '../service/user/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {

  constructor(private accountService: AccountService, private navCtrl: NavController) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.accountService.accountIsAuth) {
      this.navCtrl.navigateForward('/auth');
    }
    return this.accountService.accountIsAuth;
  }
}
