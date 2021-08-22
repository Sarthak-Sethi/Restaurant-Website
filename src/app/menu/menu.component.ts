import { Component, OnInit } from '@angular/core';
import { DISHES } from '../data/dishes';
import { Dish } from '../model/dish';
import { DishserviceService } from '../services/dishservice.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private dishService : DishserviceService) { }

   dishes : Dish[]= [];
  //dishes: any ;
  selectedDish: Dish = DISHES[0];

  

  ngOnInit(): void {
    this.dishService.getDishes().then(
      (dishes) => {this.dishes = dishes;}    ) ;
  }

  showDescription(dish: Dish) {
    this.selectedDish = dish;

  }
}
