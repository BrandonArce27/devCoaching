interface AcademyPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  userId?: boolean;
  user?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface AcademySelect {
  select?: AcademyPrismaSelect;
}
