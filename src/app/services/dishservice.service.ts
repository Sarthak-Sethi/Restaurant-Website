import { Injectable } from '@angular/core';
import { Dish } from '../model/dish';
import { DISHES } from '../data/dishes';

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
