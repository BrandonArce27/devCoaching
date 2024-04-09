import {
    Resolver,
    Query,
    Args,
    Mutation,
    ResolveField,
    Parent,
  } from '@nestjs/graphql';
  
  import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators';
    
  import { Ticket, TicketSelect } from './model';
  
  import { TicketArgs, TicketCreateInput } from './dto';
  
  import {TicketService } from './ticket.service';
  
  @Resolver(() => Ticket)
  export class TicketResolver {
    constructor(private readonly ticketService: TicketService) {}
  
    @Query(() => Ticket)
    public async ticket(
      @Args() args: TicketArgs,
      @GraphQLFields() { fields }: IGraphQLFields<TicketSelect>,
    ): Promise<Ticket> {
      return this.ticketService.findOne(args, fields);
    }
  
    @Mutation(() => Ticket)
    public async createTicket(
      @Args('data') data: TicketCreateInput,
      @GraphQLFields() { fields }: IGraphQLFields<TicketSelect>,
    ): Promise<Ticket> {
      return this.ticketService.create(data, fields);
    }
    
  }
  