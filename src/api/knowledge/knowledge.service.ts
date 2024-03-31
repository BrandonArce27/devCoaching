import { Injectable } from '@nestjs/common';

import { Knowledge, KnowledgeSelect } from './model';

import { KnowledgeArgs, KnowledgeCreateInput } from './dto';

import { PrismaService } from 'src/shared/services/prisma/prisma.service';

@Injectable()
export class KnowledgeService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: KnowledgeArgs,
    { select }: KnowledgeSelect,
  ): Promise<Knowledge> {
    return this.prismaService.knowledge.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: KnowledgeCreateInput,
    { select }: KnowledgeSelect,
  ): Promise<Knowledge> {
    return this.prismaService.knowledge.create({
      data,
      select,
    });
  }
}
