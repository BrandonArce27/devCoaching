import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserModule } from '@api';

import { ReviewModule } from '@api';

import { TicketModule } from '@api';

import { KnowledgeModule } from '@api';

import { AcademyModule } from '@api';

import { AuthModule } from '@auth';

import { ConfigModule } from '@config';

import { PrismaModule } from './shared/services';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      playground: true,
      driver: ApolloDriver,
    }),
    AuthModule,
    UserModule,
    ConfigModule,
    AcademyModule,
    KnowledgeModule,
    PrismaModule,
    ReviewModule,
    TicketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
