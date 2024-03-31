import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AcademyWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  name: string;
}
