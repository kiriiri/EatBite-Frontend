import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });

  constructor(private http: HttpClient){}
  
  ngOnInit(){

  }

   // Form Data validation handler
  formData(): any{
    return this.contactForm.value;
  }
  
  onSubmit(): void{
    console.log("Contact form data........",this.contactForm.value);
    const url ='http://localhost:3000/api/restaurant/contact'

    if(this.formData().name != null && this.formData().email != null && this.formData().message != null){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
       this.http
        .post(url,  this.contactForm.value , {headers})
        .subscribe(data => {
          console.log(data)
          this.contactForm.reset
        })
    }

  }

}
