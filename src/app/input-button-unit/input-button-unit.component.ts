import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = "";

  constructor() {
  }

  eventHandler(target: HTMLInputElement | any) {
    if (target?.value) {
      this.changeTitle(target?.value);
    }
    // Devuelve el foco
    target?.focus();
    // document.querySelector('input')?.focus();
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  ngOnInit(): void {}
}
