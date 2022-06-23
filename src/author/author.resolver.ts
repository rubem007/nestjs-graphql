import { Query, Resolver } from '@nestjs/graphql';
import { AuthorEntity } from 'src/entities/author.entity';
import { AuthorService } from './author.service';

@Resolver(() => AuthorEntity)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorEntity])
  async findAll(): Promise<AuthorEntity[]> {
    return this.authorService.findAll();
  }
}
