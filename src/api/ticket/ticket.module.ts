import { Module } from '@nestjs/common';

import { TicketResolver } from './ticket.resolver';

import { TicketService } from './ticket.service';

@Module({
  imports: [],
  providers: [TicketResolver, TicketService],
  exports: [TicketResolver, TicketService],
})
export class TicketModule {}
