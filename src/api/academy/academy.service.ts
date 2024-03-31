import { Injectable } from '@nestjs/common';

import { Academy, AcademySelect } from './model';

import { AcademyArgs, AcademyCreateInput } from './dto';

import { PrismaService } from '@services';

@Injectable()
export class AcademyService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: AcademyArgs,
    { select }: AcademySelect,
  ): Promise<Academy> {
    return this.prismaService.academy.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: AcademyCreateInput,
    { select }: AcademySelect,
  ): Promise<Academy> {
    return this.prismaService.academy.create({
      data,
      select,
    });
  }
}
