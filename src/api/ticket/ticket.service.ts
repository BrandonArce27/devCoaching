import { Injectable } from '@nestjs/common';

import { Ticket, TicketSelect } from './model';

import { TicketArgs, TicketCreateInput } from './dto';

import { PrismaService } from '@services';

@Injectable()
export class TicketService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: TicketArgs,
    { select }: TicketSelect,
  ): Promise<Ticket> {
    return this.prismaService.ticket.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: TicketCreateInput,
    { select }: TicketSelect,
  ): Promise<Ticket> {
    return this.prismaService.ticket.create({
      data,
      select,
    });
  }
}
