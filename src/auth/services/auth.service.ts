import { Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAccountDto } from '../../common/create-account.dto';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('BROCKER_SERVICE') private readonly client: ClientProxy,
  ) {}

  public async login(data: CreateAccountDto) {
    const userInfo = await firstValueFrom(
      this.client.send('findByEmail', data),
    );
    if (userInfo === null) {
      return 'login fail';
    }
    return this.client.send('login', { userInfo });
  }
}
