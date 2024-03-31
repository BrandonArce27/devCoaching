import { Module } from '@nestjs/common';
import { AcademyResolver } from './academy.resolver';

import { AcademyService } from './academy.service';

@Module({
  imports: [],
  providers: [AcademyResolver, AcademyService],
  exports: [AcademyResolver, AcademyService],
})
export class AcademyModule {}
