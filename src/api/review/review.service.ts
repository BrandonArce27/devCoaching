import { Injectable } from '@nestjs/common';

import { Review, ReviewSelect } from './model';

import { ReviewArgs, ReviewCreateInput } from './dto';

import { PrismaService } from '@services';

@Injectable()
export class ReviewService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: ReviewArgs,
    { select }: ReviewSelect,
  ): Promise<Review> {
    return this.prismaService.review.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: ReviewCreateInput,
    { select }: ReviewSelect,
  ): Promise<Review> {
    return this.prismaService.review.create({
      data,
      select,
    });
  }
}
