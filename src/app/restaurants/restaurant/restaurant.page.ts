import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Restaurant } from 'src/app/service/restaurant.model';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  restaurant: Restaurant;
  constructor(private router: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit() {

    this.router.paramMap.subscribe( (param) => {
      this.restaurant = this.restaurantService.find(param.get('restaurantId'));
      console.log(this.restaurant);
    });
  }

}
