import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
<div class="container bg-info text-center">
  <h2>{{title}}</h2>
  <hr class="text-secundary"/>
  <app-list-manager></app-list-manager>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo list app';
}
