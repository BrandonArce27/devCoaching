import { Injectable } from '@nestjs/common';

import { Academy, AcademySelect } from './model';

import { AcademyArgs, AcademyCreateInput } from './dto';

import { PrismaService } from '@services';

// import { AuthUser } from '@/shared/auth';

@Injectable()
export class AcademyService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: AcademyArgs,
    { select }: AcademySelect,
    // user: AuthUser,
  ): Promise<Academy> {
    return this.prismaService.academy.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: AcademyCreateInput,
    { select }: AcademySelect,
    // user: AuthUser,
  ): Promise<Academy> {
    return this.prismaService.academy.create({
      data,
      select,
    });
  }
}
