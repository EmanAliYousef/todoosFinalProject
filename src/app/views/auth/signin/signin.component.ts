import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authService: any;

  constructor() { }

  ngOnInit(): void {
  }
  email: string = '';
  password: string = '';

  signin() {
    this.authService.signin({ email: this.email, password: this.password });
  }
}
