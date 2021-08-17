import { Injectable } from '@angular/core';
import { Dish } from '../dish';
import { DISHES } from '../dishes';

@Injectable({
  providedIn: 'root'
})
export class DishserviceService {
dishes : Dish[] = DISHES;
  getDishes() {
    return this.dishes;
  }
  constructor() { }
}
