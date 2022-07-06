import {Component} from '@angular/core';
import {TodoService} from "./todo/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
  todoInput = '';
  isInvalidTodo = false;
  constructor(public todoService: TodoService) { }

  addTodo() {
    if(this.todoInput) {
      this.todoService.addPendingTodo(this.todoInput);
      this.todoInput = '';
      this.isInvalidTodo = false;
    } else {
     this.isInvalidTodo = true;
    }
  }
  deleteTodo(index: number) {
    this.todoService.deletePendingTodo(index);
  }
}
