import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TodoListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [TodoListComponent]
})
export class TodolistModule { }
