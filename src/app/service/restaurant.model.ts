

export class Restaurant {

  restaurantId: string;
  name: string;
  description: string;
  img: string;

  constructor(restaurantId: string, name: string, description: string, img: string) {
    this.restaurantId = restaurantId;
    this.name = name;
    this.description = description;
    this.img = img;
  }

}
