import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookEntity } from 'src/entities/book.entity';
import { CreateBookDto } from 'src/entities/dto/create-book.dto';
import { UpdateBookDto } from 'src/entities/dto/update-book.dto';
import { PaginationArgs } from 'src/entities/pagination.args';
import { BookService } from './book.service';

@Resolver()
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => BookEntity)
  async createBook(@Args('book') book: CreateBookDto): Promise<BookEntity> {
    return this.bookService.create(book);
  }

  @Query(() => [BookEntity])
  async findAllBooks(@Args() args: PaginationArgs): Promise<BookEntity[]> {
    return this.bookService.findAll(args);
  }

  @Mutation(() => BookEntity)
  async updateBook(
    @Args('id') id: string,
    @Args('book') book: UpdateBookDto,
  ): Promise<BookEntity> {
    return this.bookService.update(id, book);
  }

  @Mutation(() => BookEntity)
  async deleteBook(@Args('id') id: string): Promise<BookEntity> {
    return this.bookService.delete(id);
  }
}
