import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EatBit';
  menus:any = []

  constructor(private http: HttpClient) {
   
  }


  getRecipies(){
    const url ='http://localhost:3000/api/restaurant/getMenus'
    this.http.get(url).subscribe((res)=>{
      this.menus = res
      console.log(this.menus)
    })
  }

  ngOnInit(): void {
    this.getRecipies()
  }

}
