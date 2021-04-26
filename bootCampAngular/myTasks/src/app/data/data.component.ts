/* eslint-disable prettier/prettier */
import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() tasks: Task[] = [];
  constructor(private taskServe: TaskService) { }

  ngOnInit(): void {
  }
  done(task: Task, event: MatCheckboxChange) {
    this.taskServe.alterTask(task.id, task).subscribe();
  }

  deleteTask(taskId: number | undefined) {
    this.taskServe.deleteTask(taskId).subscribe();
  }
}
