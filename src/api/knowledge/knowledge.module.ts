import { Module } from '@nestjs/common';
import { KnowledgeResolver } from './knowledge.resolver';

import { KnowledgeService } from './knowledge.service';

@Module({
  imports: [],
  providers: [KnowledgeResolver, KnowledgeService],
  exports: [KnowledgeResolver, KnowledgeService],
})
export class KnowledgeModule {}
