import { Module, forwardRef } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { PassportModule } from '@nestjs/passport';

import { UserModule } from '@api';

import { ConfigModule } from '@config';

import { AuthService } from './auth.service';

import { AuthResolver } from './auth.controller';

import { JwtStrategy, LocalStrategy } from './strategy';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
