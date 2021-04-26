import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppAllTasksComponent } from './app-all-tasks/app-all-tasks.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddTaskComponent, {
      width: '50%',
    });
  }
  openDialog2() {
    this.dialog.open(AppAllTasksComponent, {
      width: '100%',
    });
  }
}
