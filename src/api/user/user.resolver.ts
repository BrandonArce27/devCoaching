import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';

import { User, UserSelect } from './model';

import { UserCreateInput } from './dto';

import { UserService } from './user.service';

import { GraphQLFields, IGraphQLFields } from '@decorators';

import { UseGuards } from '@nestjs/common';

import { AuthGuard, AuthUser } from '@auth';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(AuthGuard)
  public async user(
    @Context('user') user: AuthUser,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.findOne(fields, user);
  }

  @Mutation(() => User)
  public async createUser(
    @Args('data') data: UserCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.create(data, fields);
  }
}
