import { Module } from '@nestjs/common';

import { ReviewResolver } from './review.resolver';

import { ReviewService } from './review.service';

@Module({
  imports: [],
  providers: [ReviewResolver, ReviewService],
  exports: [ReviewResolver, ReviewService],
})
export class ReviewModule {}
