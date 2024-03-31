import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';

import { UserService } from './user.service';
import { PrismaModule } from '@/shared/services';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
  exports: [UserResolver, UserService],
})
export class UserModule {}
