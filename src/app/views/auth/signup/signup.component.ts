import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  name: string = '';
  email: string = '';
  password: string = '';
  

  signup() {

    this.authservice.signup({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

}
