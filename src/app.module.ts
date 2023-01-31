import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ envFilePath: ['../.env'], isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
