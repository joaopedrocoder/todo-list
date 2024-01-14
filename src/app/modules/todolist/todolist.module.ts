import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule
  ],
  exports: [TodoListComponent]
})
export class TodolistModule { }
