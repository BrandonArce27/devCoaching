interface KnowledgePrismaSelect {
  id?: boolean;
  uuid?: boolean;
  academyId?: boolean;
  title?: boolean;
  description?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface KnowledgeSelect {
  select?: KnowledgePrismaSelect;
}
