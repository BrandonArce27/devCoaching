import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class KnowledgeWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  uuid: string;

  @Field(() => Number, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description: string;
}
