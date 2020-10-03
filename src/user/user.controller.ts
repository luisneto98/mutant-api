import { IUserJson } from './../../dist/common/interfaces/user-json.interface.d';
import { User } from './../database/models/user.model';
import { UserRepository } from './user.repository';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  @ApiResponse({ status: 200, type: User })
  getUsers(@Body() body: IUserJson) {
    return this.userRepository.insertUserJson(body);
  }
}