import { UserSelect } from '@/api/user/model';

interface AcademyPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  userId?: boolean;
  owner?: UserSelect;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface AcademySelect {
  select?: AcademyPrismaSelect;
}
