import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {


  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  cuisines:any = []

  getRecipies(cuisineId: Number){
    console.log(cuisineId)

    const url ='http://localhost:3000/api/restaurant/getCuisines/'+cuisineId
    this.http.get(url).subscribe((res)=>{
      this.cuisines = res
      console.log(this.cuisines)
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let cuisineId = params['id'];
      this.getRecipies(cuisineId)
    })
    
  }

}
