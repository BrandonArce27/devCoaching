import { ArgsType, Field } from '@nestjs/graphql';

import { ReviewWhereUniqueInput } from './review-where-unique.input';

@ArgsType()
export class ReviewArgs {
  @Field(() => ReviewWhereUniqueInput)
  where: ReviewWhereUniqueInput;
}
