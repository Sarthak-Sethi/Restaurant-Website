import { Injectable } from '@angular/core';
import { Dish } from '../model/dish';
import { DISHES } from '../data/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishserviceService {
dishes : Dish[] = DISHES;

// Returning a promise 

  // getDishes() : Promise<Dish []> {
  //   return new Promise(
  //     (resolve,reject) => {
  //       resolve(this.dishes);
  //     }
  //     )
  // }

  // Returning A oberrvable  and rhen converting it to promise
  // getDishes() : Promise<Dish []> {
  // return of(DISHES).pipe(delay(2000)).toPromise();
  // }

// Returning a Observable Directly
getDishes(): Observable<Dish[]> {
  return of(DISHES).pipe(delay(2000));
}



  constructor() { }
}
