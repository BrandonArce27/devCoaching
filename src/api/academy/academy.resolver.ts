import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Academy, AcademySelect } from './model';

import { AcademyArgs, AcademyCreateInput } from './dto';

import { AcademyService } from './academy.service';

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators';

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
}
