import { Field, ObjectType, Int } from '@nestjs/graphql';

import { User } from '@/api/user/model';

@ObjectType()
export class Academy {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => User, { nullable: true })
  owner?: User;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
