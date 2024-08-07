import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

import { Language } from '@prisma/client';

@InputType()
export class UserCreateInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => String)
  password: string;

  @MaxLength(60)
  @Field(() => String)
  firstName: string;

  @MaxLength(60)
  @Field(() => String)
  lastName: string;

  @Field(() => Language)
  language: Language;
}
