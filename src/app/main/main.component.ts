import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [CustomersService]
})
export class MainComponent implements OnInit {
  token: string;
  customers: any;
  
  constructor(private router: Router, private customersService: CustomersService) {
    this.token = localStorage.getItem('token');
    if (!this.token) {
      // no token
      this.router.navigateByUrl('/login');
    }
   }

  getCustomers() {
    this.customersService.getCustomers(this.token)
      .then((data: any) => {
        if (data.ok) {
          this.customers = data.rows;
        }
       }, (error: any) => { });

   }
  ngOnInit() {
    this.getCustomers();
  }

  remove(customer: any) {
    if (confirm('Are you sure? [' + customer.first_name + ']')) {
      // ok remove
      this.customersService.remove(this.token, customer.id)
        .then((data: any) => {
          if (data.ok) {
            this.getCustomers();
          }
        }, (error: any) => { });
    }
  }

}
