import { Injectable } from '@nestjs/common';

import { User, UserSelect } from './model';

import { UserCreateInput } from './dto';

import { PrismaService } from '@services';

import { AuthUser } from '@/shared/auth';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne({ select }: UserSelect, user: AuthUser): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        email: user.email,
      },
      select,
    });
  }

  public async findPasswordbyEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    return user ? user.password : null;
  }

  public async create(
    data: UserCreateInput,
    { select }: UserSelect,
  ): Promise<User> {
    return this.prismaService.user.create({
      data,
      select,
    });
  }
}
