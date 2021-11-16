import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-listing',
  templateUrl: 'listing.component.html',
  styleUrls: ['listing.component.css']
})
export class ListingComponent implements OnInit {

  listForm: FormGroup = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    restaurant_name: new FormControl(),
    email: new FormControl(),
    mobile_no: new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  // Form Data validation handler
  formData(): any {
    return this.listForm.value;
  }

  onSubmit(): void {
    console.log("Contact form data........", this.listForm.value);
    const url = 'http://localhost:3000/api/restaurant/listRestaurant'

    if (this.formData().first_name != null &&
      this.formData().last_name != null &&
      this.formData().restaurant_name != null &&
      this.formData().email != null &&
      this.formData().mobile_no != null) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      this.http
        .post(url, this.listForm.value, { headers })
        .subscribe(data => {
          console.log(data)
          this.listForm.reset
        })
    }

  }

}
