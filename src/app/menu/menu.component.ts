import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishserviceService } from '../services/dishservice.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private dishService : DishserviceService) { }

  dishes: Dish[] = [];
  selectedDish: Dish = this.dishes[0];

  

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes() ;
  }

  showDescription(dish: Dish) {
    this.selectedDish = dish;

  }
}
