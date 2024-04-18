import { Field, ObjectType, Int } from '@nestjs/graphql';

import { User } from '@/api/user/model';

import { Ticket } from '@/api/ticket/model';

@ObjectType()
export class Review {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  ticketId?: number;

  @Field(() => String, { nullable: true })
  comment?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => User, { nullable: true })
  owner?: User;

  @Field(() => Ticket, { nullable: true })
  ticket?: Ticket;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
