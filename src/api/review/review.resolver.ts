import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators';

import { Review, ReviewSelect } from './model';

import { ReviewArgs, ReviewCreateInput } from './dto';

import { ReviewService } from './review.service';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => Review)
  public async review(
    @Args() args: ReviewArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ReviewSelect>,
  ): Promise<Review> {
    return this.reviewService.findOne(args, fields);
  }

  @Mutation(() => Review)
  public async createReview(
    @Args('data') data: ReviewCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ReviewSelect>,
  ): Promise<Review> {
    return this.reviewService.create(data, fields);
  }
}
