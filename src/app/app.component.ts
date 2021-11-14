import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cities:any = []
  cuisines:any =[]

  constructor(private http: HttpClient) {
   
  }

  getCities(){
    const url ='http://localhost:3000/api/restaurant/getCities'
    this.http.get(url).subscribe((res)=>{
      this.cities = res
      console.log(this.cities)
    })
  }

  getCuisines(){
    const url ='http://localhost:3000/api/restaurant/getCuisines'
    this.http.get(url).subscribe((res)=>{
      this.cuisines = res
      console.log(this.cuisines)
    })
  }

  ngOnInit(): void {
    this.getCities();
    this.getCuisines();
  }

  

}
