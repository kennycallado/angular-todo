import { Component, OnInit } from '@angular/core';

import { TodoListService } from "../services/todo-list.service";
import { TodoItem } from "../interfaces/todo-item"

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [];

  constructor(private todoListService: TodoListService) {}

  addItem(title: any) {
    this.todoListService.addItem({title});
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

}
