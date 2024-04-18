import { Field, InputType } from '@nestjs/graphql';

import { MaxLength, MinLength } from 'class-validator';
import {} from '@/api/user/dto';

@InputType()
export class ReviewCreateInput {
  @Field(() => Number)
  userId: number;

  @Field(() => Number)
  ticketId: number;

  @MinLength(30)
  @MaxLength(60)
  @Field(() => String)
  comment: string;
}
