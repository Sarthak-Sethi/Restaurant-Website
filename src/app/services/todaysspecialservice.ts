import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class todaypecialService {
  private url = "https://www.themealdb.com/api/json/v1/1/random.php";

  constructor(private http : HttpClient) { }

    // The get method in httpClient returns an observabe and it gets unsubcribed automatically too
  getObj(){
    return this.http.get(this.url);
  }
}
