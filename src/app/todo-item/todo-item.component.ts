import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

@Input() item: TodoItem = {title: "hola"};

@Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor() {}

  removeItem(): void {
    this.remove.emit(this.item);
  }

  ngOnInit(): void {
  }

}
