import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root component
import { AppComponent } from './app.component';

// Components
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

// El module no es el controler, solo da lógica a angular sobre el componente.
@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
