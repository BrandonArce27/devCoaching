interface UserPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  email?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface UserSelect {
  select?: UserPrismaSelect;
}
