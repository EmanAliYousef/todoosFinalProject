import { TodoosService } from 'src/app/services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { TODO, todoDefaultValue } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo:TODO = todoDefaultValue;

  constructor(private todoService: TodoosService) { }

  ngOnInit(): void {
  }
  deleteTodo() {
    this.todoService.deleteTodo(this.todo._id)
  }
}
