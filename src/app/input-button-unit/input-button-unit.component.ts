import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = "";

  constructor() {
    this.changeTitle("Hello world");
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    }
  // La voy a dejar al final
  ngOnInit(): void {
  }
}
