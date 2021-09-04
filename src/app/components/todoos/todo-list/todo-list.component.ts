import { Component, OnInit } from '@angular/core';
import { TodoosService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoservice: TodoosService ) { }
  get todoos() {
    return this.todoservice.todoos;
  }


  ngOnInit(): void {
  }

}
