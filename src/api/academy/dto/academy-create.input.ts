import { Field, InputType } from '@nestjs/graphql';

import { MaxLength } from 'class-validator';

import { UserWhereUniqueInput } from '@/api/user/dto';

@InputType()
export class UserCreateNestedOneWithoutAcademyInput {
  @Field(() => UserWhereUniqueInput)
  connect: UserWhereUniqueInput;
}

@InputType()
export class AcademyCreateInput {
  @MaxLength(60)
  @Field(() => String)
  name: string;

  @Field(() => UserCreateNestedOneWithoutAcademyInput)
  owner: UserCreateNestedOneWithoutAcademyInput;
}
