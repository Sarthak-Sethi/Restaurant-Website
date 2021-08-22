import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DISHES } from '../data/dishes';
import { Dish } from '../model/dish';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  @Input()
 dish: Dish = DISHES[0];
 
 
  constructor( ) { 
   
  }
  ngOnInit(): void {
    this.dish = DISHES[0];
    
    
  }



}
