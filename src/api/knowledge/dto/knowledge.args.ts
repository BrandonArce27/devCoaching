import { ArgsType, Field } from '@nestjs/graphql';

import { KnowledgeWhereUniqueInput } from './knowledge-where-unique.input';

@ArgsType()
export class KnowledgeArgs {
  @Field(() => KnowledgeWhereUniqueInput)
  where: KnowledgeWhereUniqueInput;
}
