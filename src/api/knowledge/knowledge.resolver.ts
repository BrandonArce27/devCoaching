import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Knowledge, KnowledgeSelect } from './model';

import { KnowledgeArgs, KnowledgeCreateInput } from './dto';

import { KnowledgeService } from './knowledge.service';

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators';

@Resolver(() => Knowledge)
export class KnowledgeResolver {
  constructor(private readonly knowledgeService: KnowledgeService) {}

  @Query(() => Knowledge)
  public async knowledge(
    @Args() args: KnowledgeArgs,
    @GraphQLFields() { fields }: IGraphQLFields<KnowledgeSelect>,
  ): Promise<Knowledge> {
    return this.knowledgeService.findOne(args, fields);
  }

  @Mutation(() => Knowledge)
  public async createKnowledge(
    @Args('data') data: KnowledgeCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<KnowledgeSelect>,
  ): Promise<Knowledge> {
    return this.knowledgeService.create(data, fields);
  }
}
