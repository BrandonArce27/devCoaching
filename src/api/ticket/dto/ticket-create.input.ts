import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class TicketCreateInput {
  @MaxLength(60)
  @Field(() => String)
  title: string;

  @MaxLength(60)
  @Field(() => String)
  description: string;

  @Field(() => Number)
  userId: number;

  @Field(() => Number)
  knowledgeId: number;
}
