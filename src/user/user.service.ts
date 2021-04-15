/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize';
import model from 'sequelize/types/lib/model';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersDto } from './dto/find-users.dto';
import { UpdateUserDto } from './dto/update-usar.dto';
import { TaskController } from './task/task.controller';
import { Task } from './task/task.model';
import { TaskModule } from './task/task.module';
import { User } from './user.model';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({
      where: { email: createUserDto.email },
    });

    if (user) {
      throw new ConflictException('Email já cadastrado');
    }

    return this.userModel.create(createUserDto);
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, { where: { id: id } });
  }
  
  findUsers(findUsersDto: FindUsersDto): Promise<User[]> {
    const where: any = {};

    if (findUsersDto.name) {
      where.name = findUsersDto.name;
    }

    if (findUsersDto.email) {
      where.email = findUsersDto.email;
    }
    
    return this.userModel.findAll({ where });
  }

  deleteUser(id: string) {
    return this.userModel.destroy({ where: { id } });
  }

  findFull(){
    return this.userModel.findAll();
  }

  

}
