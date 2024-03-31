import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserModule } from '@api';

import { KnowledgeModule } from '@api';

import { AcademyModule } from '@api';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      playground: true,
      driver: ApolloDriver,
    }),
    UserModule,
    AcademyModule,
    KnowledgeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
