import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

// Este sería el controller

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ts-angular-todo';
  todoList: TodoItem[] = [
    {title: "Go for a walk."},
    {title: "Buy flowers"},
    {title: "Take a break"},
    {title: "Call my frends"},
    {title: "Carry on"},
  ];

  addItem(title: any) {
    this.todoList.push({ title })
  }
}
