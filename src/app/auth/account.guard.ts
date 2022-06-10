/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, CanLoad, Route,  RouterStateSnapshot,  UrlSegment, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AcountService } from './acount-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {

  constructor(private accountService: AcountService, private navCtrl: NavController) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.accountService.accountIsAuth);
    if (!this.accountService.accountIsAuth) {
      this.navCtrl.navigateForward('/auth');
    }
    return this.accountService.accountIsAuth;
  }
}
