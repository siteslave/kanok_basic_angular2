import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.login(this.username, this.password)
      .then((data: any) => { 
        if (data.ok) {
          let token = data.token;
          localStorage.setItem('token', token);
          this.router.navigateByUrl('/');
        } else {
          this.message = data.message;
        }
      }, (error) => { 
        this.message = JSON.stringify(error);
      });
  }

}
