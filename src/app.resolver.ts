import { Query, Resolver } from '@nestjs/graphql';
import { HelloResponse } from './graphql';

@Resolver()
export class AppResolver {
    @Query()
    hello(): HelloResponse {
        return { greeting: 'Hello from NestJS' };
    }
}
