/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { create } from 'node:domain';
import { User } from '../user.model';
import { CreateTaskDto } from './create-task.dto';
import { FindTaskDto } from './find-task.dto';
import { Task } from './task.model';

@Injectable() //Responsável pos cadastrar de fato no banco de dados

export class TaskService {
    constructor(
        @InjectModel(Task)
        private TaskModel : typeof Task,
    ){}

    createTask( createTask : CreateTaskDto){
        return this.TaskModel.create(createTask);
    }

   async findTask( userId : number): Promise<Task[]>{
        const where : any = {};;
        where.userId = userId;

        return this.TaskModel.findAll({where});
   }
    
}
