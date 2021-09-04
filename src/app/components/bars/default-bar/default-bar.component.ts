import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.scss']
})
export class DefaultBarComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
  }
 
    

  get isLoggedIn(): boolean {
    return this.userservice.userLoggedIn();
  }

  signout() {
    this.userservice.clear();
    this.router.navigateByUrl('/signin')
  }
}
