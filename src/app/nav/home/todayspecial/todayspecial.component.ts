import { Component, OnInit } from '@angular/core';
import { todaypecialService } from 'src/app/services/todaysspecialservice';

@Component({
  selector: 'app-todayspecial',
  templateUrl: './todayspecial.component.html',
  styleUrls: ['./todayspecial.component.css']
})
export class TodayspecialComponent implements OnInit {
obj : any;
  constructor(private todaysspecial : todaypecialService) { }

  ngOnInit(): void {
    this.todaysspecial.getObj().subscribe(
      (obj:any) => {
        // console.log(obj.meals[0].strMeal);
        this.obj = obj.meals[0];
      },
      (err) => {
        alert("error");
      }
    )
  }

}
