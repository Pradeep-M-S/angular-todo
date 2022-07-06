import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  pendingTodos = ['Learn Angular','Learn Python/Flask'];
  completedTodos = ['Learn React'];
  constructor() { }

  getPendingTodos(): string[] {
    return this.pendingTodos;
  }

  getCompletedTodos(): string[] {
    return this.completedTodos;
  }

  addPendingTodo(todo: string) {
    this.pendingTodos.push(todo);
  }

  deletePendingTodo(index: number) {
    this.addCompletedTodo(this.pendingTodos[index]);
    this.pendingTodos.splice(index, 1);
  }

  addCompletedTodo(todo: string) {
    this.completedTodos.push(todo);
  }
}
