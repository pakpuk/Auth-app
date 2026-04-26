import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthcontrollerController } from './authcontroller/authcontroller.controller';
import { AuthService } from './service/auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, AuthcontrollerController],
  providers: [AppService, AuthService],
})
export class AppModule {}
