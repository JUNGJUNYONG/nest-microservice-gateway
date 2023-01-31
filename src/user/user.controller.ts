import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateAccountDto } from '../common/create-account.dto';

import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    @Inject('BROCKER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Post('/register')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async register(@Body() credentials: CreateAccountDto) {
    return this.userServiceClient.send('create', credentials);
  }
}
