import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  uuid: string;

  @Field(() => String, { nullable: true })
  comment: string;
}
