import { Field, InputType, Int } from '@nestjs/graphql';

import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class AcademyCreateInput {
  @MaxLength(60)
  @Field(() => String)
  name: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => Int)
  userId: number;
}
