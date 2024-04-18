import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { User, UserSelect } from './model';

import { UserArgs, UserCreateInput } from './dto';

import { UserService } from './user.service';

import { GraphQLFields, IGraphQLFields } from '@decorators';

import { UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '@auth';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  public async user(
    @Args() args: UserArgs,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.findOne(args, fields);
  }

  @Mutation(() => User)
  public async createUser(
    @Args('data') data: UserCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ): Promise<User> {
    return this.userService.create(data, fields);
  }
}
