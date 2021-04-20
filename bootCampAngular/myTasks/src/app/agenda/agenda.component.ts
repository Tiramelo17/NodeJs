import { Component, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  panelOpenState = false;

  tarefas: Task[] = [
    new Task('Tarefa 1', ''),
    new Task('Tarefa 2', ''),
    new Task('Tarefa 3', ''),
    new Task('Tarefa 4', ''),
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
