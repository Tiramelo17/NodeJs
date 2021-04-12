/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
import { FindTaskDto } from './find-task.dto';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('users/:userId/tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}
   
    @Post()
    createTask(@Body() createTask : CreateTaskDto){
        return this.taskService.createTask(createTask);
    }

    @Get()
    findTask(@Param('userId', ParseIntPipe) userId : number){
    return this.taskService.findTask(userId);
    }
    
}
