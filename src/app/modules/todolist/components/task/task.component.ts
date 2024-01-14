import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task: Task = {
    name: '',
    done: false,
    descripion: ''
  }

  @Output() deleteTask = new EventEmitter<void>()
  @Output() editTask = new EventEmitter<void>()
}
