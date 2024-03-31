import { ArgsType, Field } from '@nestjs/graphql';

import { AcademyWhereUniqueInput } from './academy-where-unique.input';

@ArgsType()
export class AcademyArgs {
  @Field(() => AcademyWhereUniqueInput)
  where: AcademyWhereUniqueInput;
}
