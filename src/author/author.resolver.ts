import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorEntity } from 'src/entities/author.entity';
import { CreateAuthorDTO } from 'src/entities/dto/create-author.dto';
import { UpdateAuthorDto } from 'src/entities/dto/update-author.dto';
import { PaginationArgs } from 'src/entities/pagination.args';
import { AuthorService } from './author.service';

@Resolver(() => AuthorEntity)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorEntity])
  async findAllAuthor(@Args() args: PaginationArgs): Promise<AuthorEntity[]> {
    return this.authorService.findAll(args);
  }

  @Mutation(() => AuthorEntity)
  async createAuthor(
    @Args('author') author: CreateAuthorDTO,
  ): Promise<AuthorEntity> {
    return this.authorService.create(author);
  }

  @Mutation(() => AuthorEntity)
  async updateAuthor(
    @Args('id') id: string,
    @Args('author') author: UpdateAuthorDto,
  ): Promise<AuthorEntity> {
    return this.authorService.update(id, author);
  }
}
