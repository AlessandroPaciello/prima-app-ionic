import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountGuard } from '../auth/account.guard';

import { RestaurantsPage } from './restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  },
  {
    path: ':restaurantId',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule), canActivate: [AccountGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
