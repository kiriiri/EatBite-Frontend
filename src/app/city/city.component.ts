import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { data } from 'jquery';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  cityMenus:any = []

  getRecipies(cityId: Number){
    console.log(cityId)

    const url ='http://localhost:3000/api/restaurant/getCityRestaurants/'+cityId
    this.http.get(url).subscribe((res)=>{
      this.cityMenus = res
      console.log(this.cityMenus)
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let cityId = params['id'];
      this.getRecipies(cityId)
    })
    
  }

}
