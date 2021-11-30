import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private memberService: UserService) {}
  @Get('/user')
  async getAllUser(): Promise<Array<any>> {
    return this.memberService.getAllUser();
  }

  @Get('/user/:userId')
  async findOne(@Param('userId') id: string): Promise<any> {
    return this.memberService.getUserByUid(id);
  }

  @Post('/user')
  async createUser(@Body() userData: User): Promise<User> {
    return this.memberService.createUser(userData);
  }

}
