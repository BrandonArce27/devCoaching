import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators';

import { User } from 'src/api/user/model';

import { Academy, AcademySelect } from './model';

import { AcademyArgs, AcademyCreateInput } from './dto';

import { AcademyService } from './academy.service';

@Resolver(() => Academy)
export class AcademyResolver {
  constructor(private readonly academyService: AcademyService) {}

  @Query(() => Academy)
  public async academy(
    @Args() args: AcademyArgs,
    @GraphQLFields() { fields }: IGraphQLFields<AcademySelect>,
  ): Promise<Academy> {
    return this.academyService.findOne(args, fields);
  }

  @Mutation(() => Academy)
  public async createAcademy(
    @Args('data') data: AcademyCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<AcademySelect>,
  ): Promise<Academy> {
    return this.academyService.create(data, fields);
  }

  @ResolveField()
  async owner(@Parent() academy: Academy): Promise<User> {
    // const { id } = academy;
    console.log('academy', academy);
    return null as User;
    // this.postsService.findAll({ authorId: id });
  }
}
