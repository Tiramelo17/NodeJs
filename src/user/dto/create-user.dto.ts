/* eslint-disable prettier/prettier */
import { IsEmail, IsNumberString, IsString, Length } from 'class-validator';
import { isColString } from 'sequelize/types/lib/utils';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail(undefined, { message: 'O email deve ter o formato correto' })
  email: string;

  @IsNumberString()
  @Length(11, 11)
  phone: string;

  @IsString()
  password : string;

  // eslint-disable-next-line prettier/prettier
}