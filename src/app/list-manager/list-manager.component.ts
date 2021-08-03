import { Component, OnInit } from '@angular/core';
import { TodoItem } from "../interfaces/todo-item";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    {title: "Go for a walk."},
    {title: "Buy flowers"},
    {title: "Take a break"},
    {title: "Call my frends"},
    {title: "Carry on"},
  ];

  constructor() {}

  addItem(title: any) {
    this.todoList.push({ title })
  }

  ngOnInit(): void {
  }

}
