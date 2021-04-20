import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';

@Component({
  selector: 'app-agenda-task',
  templateUrl: './agenda-task.component.html',
  styleUrls: ['./agenda-task.component.scss']
})
export class AgendaTaskComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
