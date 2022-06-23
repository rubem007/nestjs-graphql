import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorEntity } from 'src/entities/author.entity';
import { CreateAuthorDTO } from 'src/entities/dto/create-author.dto';
import { AuthorService } from './author.service';

@Resolver(() => AuthorEntity)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorEntity])
  async findAll(): Promise<AuthorEntity[]> {
    return this.authorService.findAll();
  }

  @Mutation(() => AuthorEntity)
  async create(@Args('author') author: CreateAuthorDTO): Promise<AuthorEntity> {
    return this.authorService.create(author);
  }
}
