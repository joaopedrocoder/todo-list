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

  constructor() {}

  ngOnInit(): void {

  }

  deleteTask(task: Task){
    alert('DELETE '+task.name)
  }

  editTask(task: Task){
    alert('EDIT '+task.name)
  }


}
