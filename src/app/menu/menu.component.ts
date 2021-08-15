import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DISHES } from '../dishes'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;
  selectedDish: Dish = this.dishes[0];

  constructor() { }

  ngOnInit(): void {
  }

  showDescription(dish: Dish) {
    this.selectedDish = dish;

  }
}
