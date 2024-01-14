import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tasks: Task[] = [
    {name: "Fazer comida", descripion: "", done: false, date: new Date('Jul 12 2024')}
  ]
  numberTasks = 0

  deleteTask(task: Task){
    alert(task)
  }
}
