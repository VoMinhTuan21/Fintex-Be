import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [UserModule, JwtModule],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
