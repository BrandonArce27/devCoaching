import { UserSelect } from '@/api/user/model';

interface TicketPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  title?: boolean;
  description?: boolean;
  userId?: boolean;
  owner?: UserSelect;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface TicketSelect {
  select?: TicketPrismaSelect;
}
