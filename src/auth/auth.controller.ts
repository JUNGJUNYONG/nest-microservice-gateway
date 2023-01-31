import { Body, Controller, Get, Logger, Post, Req } from '@nestjs/common';
import { CreateAccountDto } from '../common/create-account.dto';
import { Request } from 'express';
import { AuthService } from './services/auth.service';
import { Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger: Logger = new Logger('AuthController');
  @Post('/login')
  async login(@Payload() data: CreateAccountDto) {
    this.logger.log('Call API : login');
    return await this.authService.login(data);
  }
}
