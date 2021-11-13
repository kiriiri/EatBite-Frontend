import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'EatBit';

  items : any = [
    // {
    //   title: "1 slide label",
    //   summery: "1 slide label summery",
    //   url: "https://via.placeholder.com/200?text=first"
    // },
    // {
    //   title: "2 slide label",
    //   summery: "2 slide label summery",
    //   url: "https://via.placeholder.com/200?text=second"
    // },
    // {
    //   title: "3 slide label",
    //   summery: "3 slide label summery",
    //   url: "https://via.placeholder.com/200?text=third"
    // }
  ];


  menus:any = []
  popularMenus:any = []


  constructor(private http: HttpClient) { }

  getRecipies(){
    const url ='http://localhost:3000/api/restaurant/getMenus'
    this.http.get(url).subscribe((res)=>{
      this.items = res
      console.log(this.menus)
    })
  }

  getPopularRecipies(){
    const url ='http://localhost:3000/api/restaurant/getPopularMenus'
    this.http.get(url).subscribe((res)=>{
      this.popularMenus = res
      console.log(this.popularMenus)
    })
  }

  ngOnInit(): void {
    this.getRecipies();
    this.getPopularRecipies();
  }


}
