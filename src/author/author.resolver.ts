import { Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}
}
