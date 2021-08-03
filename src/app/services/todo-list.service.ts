import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  todoList: TodoItem[] = [
    {title: "Go for a walk."},
    {title: "Buy flowers"},
    {title: "Take a break"},
    {title: "Call my frends"},
    {title: "Carry on"},
  ];

  constructor() {}

  addItem(item: TodoItem): void { 
    this.todoList.push(item);
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
