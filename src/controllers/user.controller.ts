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
  @Get('/')
  async getAllUser(): Promise<Array<any>> {
    return this.memberService.getAllUser();
  }

  @Get('/:userId')
  async getUserByUid(@Param('userId') id: string): Promise<any> {
    return this.memberService.getUserByUid(id);
  }

  @Post('/')
  async createUser(@Body() userData: User): Promise<User> {
    return this.memberService.createUser(userData);
  }
}
