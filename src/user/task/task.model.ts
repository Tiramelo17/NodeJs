/* eslint-disable prettier/prettier */
import { BelongsTo, Column, ForeignKey, Model, Table, Unique } from 'sequelize-typescript';
import { User } from '../user.model';

@Table
export class Task extends Model {
 
  @Column
  description: string;

  @Column
  date : string;

  @ForeignKey(() => User)
  @Column
  userId : number;

  @BelongsTo(()=> User)
  user:User
// eslint-disable-next-line prettier/prettier
}
