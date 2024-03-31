import { User } from '@/api/user/model';
import { Field, ObjectType, Int } from '@nestjs/graphql';

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

  @Field(() => User, { nullable: true }) // relation with user.
  user?: User;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
