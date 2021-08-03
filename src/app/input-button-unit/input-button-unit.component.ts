import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = "";

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  eventHandler(target: HTMLInputElement | any) {
    if (target?.value) {
      this.submitValue(target?.value);
    }
    target?.focus();
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  ngOnInit(): void {}
}
