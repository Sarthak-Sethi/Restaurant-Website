import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish = new Dish();


  constructor() { }



  ngOnInit(): void {
  }

}
