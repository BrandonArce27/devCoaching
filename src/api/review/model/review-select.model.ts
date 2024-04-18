import { UserSelect } from '@/api/user/model';
import { TicketSelect } from '@/api/ticket/model';

interface ReviewPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  comment?: boolean;
  userId?: boolean;
  owner?: UserSelect;
  ticketId?: boolean;
  ticket?: TicketSelect;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface ReviewSelect {
  select?: ReviewPrismaSelect;
}
