import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  currentRate : number = 0;

  Arr = Array;
  constructor() { }

  ngOnInit(): void {
  }

}
