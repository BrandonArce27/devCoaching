import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

import { Language } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Language, { nullable: true })
  language?: Language;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

registerEnumType(Language, {
  name: 'Language',
});
