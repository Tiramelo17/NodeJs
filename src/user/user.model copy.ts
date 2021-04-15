/* eslint-disable prettier/prettier */
import { Column, HasMany, Model, Table, Unique } from 'sequelize-typescript';
import { Task } from './task/task.model';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  password : number; 
  
  @HasMany(() => Task)
  task = Task
}
