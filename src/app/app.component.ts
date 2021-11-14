import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cities:any = []

  constructor(private http: HttpClient) {
   
  }

  getCities(){
    const url ='http://localhost:3000/api/restaurant/getCities'
    this.http.get(url).subscribe((res)=>{
      this.cities = res
      console.log(this.cities)
    })
  }

  ngOnInit(): void {
    this.getCities();
  }

  

}
