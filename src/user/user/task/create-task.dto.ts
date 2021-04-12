/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  description: string;
 
  date : string;
  // eslint-disable-next-line prettier/prettier
}