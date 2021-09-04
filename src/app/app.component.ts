import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoosFinalProject';
  email = 'ahmed@gmail.com'
  

  sendEmail(value: string) {
    this.email = value;
  }


  update() {
    this.email = 'Updated@gmail.com'
  }


  userLoggedIn = true;

  updateUserState() {
    this.userLoggedIn = !this.userLoggedIn;
  }
  
  userType: string = 'asdgdsfg';

  todos: string[] = [
    'todo one',
    'todo 2',
    'todo 3',
    'todo 4',
    'todo 5',

  ]

  user = {
    name: 'ahmed',
    age: 30
  }

  now = new Date();

  myModel: any;
}
