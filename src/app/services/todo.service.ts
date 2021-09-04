import { Injectable } from '@angular/core';
import { TODO} from '../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TodoosService {
  deleteTodo(_id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient, private userService: UserService, private router: Router) {}

  todoos: TODO[] = [
  ];

  private _baseUrl = 'http://localhost:3000/todo'

  private get headers() {
    return {
      headers: {
        Authorization: this.userService.getToken(),
      },
    };
  }

  fetchArticles() {
    this.http
      .get<{
        todoos: TODO[];
      }>(this._baseUrl, this.headers)
      .subscribe(
        (data) => (this.todoos = data.todoos),
        (err) => console.log(err)
      );
  }


  
  createArticle(data: { title: string, content: string }) {
    this.http.post<{
      todo: TODO
    }>(this._baseUrl, data, this.headers).subscribe(
      data => {
        this.todoos.push(data.todo);
        this.router.navigateByUrl('/')
      },
      err => console.log(err)
    );
  }

  updateArticle(data: {
    id: string,
    title: string,
    content: string
  }) {
    this.http.put(`${this._baseUrl}/${data.id}`, data, this.headers).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => console.log(err)
    )
  }

  deleteArticle(id: string) {
    this.http.delete(`${this._baseUrl}/${id}`, this.headers).subscribe(
      data => {
        const todoIndex = this.todoos.findIndex(t => t._id == id)

        if (todoIndex > -1) {
          this.todoos.splice(todoIndex, 1)
        }
      },
      err => console.log(err)
    )
  }

  getArticleById(id: string) {
    return this.todoos.find(t => t._id == id);
  }
}
