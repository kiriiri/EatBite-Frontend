import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    id_number: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl(),
    country: new FormControl(),
    phone_number: new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  formData(): any {
    return this.customerForm.value;
  }

  onSubmit(): void {
    console.log("Contact form data........", this.customerForm.value);
    const url = 'http://localhost:3000/api/restaurant/createCustomer'

    if (this.formData().first_name != null &&
      this.formData().last_name != null &&
      this.formData().id_number != null &&
      this.formData().dob != null &&
      this.formData().gender != null &&
      this.formData().country != null &&
      this.formData().phone_number != null
    ) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      this.http
        .post(url, this.customerForm.value, { headers })
        .subscribe(data => {
          console.log(data)
          this.customerForm.reset
        })
    }

  }

}
