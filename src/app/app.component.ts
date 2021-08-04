import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
<div class="container-fluid text-center bg-info" >
  <h2>{{title}}</h2>
  <hr />
  <app-list-manager></app-list-manager>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My todo list';
}
