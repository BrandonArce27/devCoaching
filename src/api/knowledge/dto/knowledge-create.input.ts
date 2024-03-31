import { Field, InputType, Int } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class KnowledgeCreateInput {
  @IsEmail()
  @Field(() => String)
  title: string;

  @MinLength(4)
  @MaxLength(60)
  @Field(() => String)
  description: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => Int, { nullable: true }) // lo hago nullable para que no sea obligatorio mientras se crea la entidad academy
  academyId: number;
}
