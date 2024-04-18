import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TicketWhereUniqueInput {
  @Field(() => Number)
  id: number;

  @Field(() => String, { nullable: true })
  uuid: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
