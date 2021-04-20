import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from './models/task.model';
import { finalize } from 'rxjs/operators';


@Injectable()
export class TaskService {
  private updateTasks$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  public onUpdateTasks(): Observable<void> {
    return this.updateTasks$;
  }

  /**
   * Cria uma nova tarefa
   */
   public createTask(task: Task) : Observable<void> {
    return this.http.post<void>('localhost:4200/tasks', task)
    .pipe(
      finalize(() => this.updateTasks$.next()) // Execute when the observable completes
    );
  }
}
