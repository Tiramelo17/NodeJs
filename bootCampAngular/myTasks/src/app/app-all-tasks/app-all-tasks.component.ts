/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AgendaComponent } from '../agenda/agenda.component';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-app-all-tasks',
  templateUrl: './app-all-tasks.component.html',
  styleUrls: ['./app-all-tasks.component.scss']
})
export class AppAllTasksComponent implements OnInit {

  tarefasParaHoje: Task[] = [];
  tarefasParaAmanha: Task[] = [];
  tarefasParaOsProximosDias: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.onUpdateTasks()
    .subscribe(
      () => {
        this.init();
      }
    );

    this.init();
  }

  private init() {
    this.listTasksForToday();
    this.listTasksForTomorrow();
    this.listUpcomingTasks();
  }

  private listTasksForToday() {
    this.taskService
    .listTasksForToday()
    .subscribe(
      (tarefas: Task[]) => {
        this.tarefasParaHoje = tarefas;
      }
    );
  }

  private listTasksForTomorrow() {
    this.taskService
    .listTasksForTomorrow()
    .subscribe(
      (tarefas: Task[]) => {
        this.tarefasParaAmanha = tarefas;
      }
    );
  }

  private listUpcomingTasks() {
    this.taskService
    .listUpcomingTasks()
    .subscribe(
      (tarefas: Task[]) => {
        this.tarefasParaOsProximosDias = tarefas;
      }
    );
  }
}


