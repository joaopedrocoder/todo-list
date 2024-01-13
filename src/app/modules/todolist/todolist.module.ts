import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule
  ],
  exports: [TodoListComponent]
})
export class TodolistModule { }
