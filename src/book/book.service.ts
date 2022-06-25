import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { BookEntity } from 'src/entities/book.entity';
import { CreateBookDto } from 'src/entities/dto/create-book.dto';
import { UpdateBookDto } from 'src/entities/dto/update-book.dto';
import { PaginationArgs } from 'src/entities/pagination.args';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBookDto): Promise<BookEntity> {
    const book = await this.prisma.book.create({
      data,
    });

    return book;
  }

  async findAll(args: PaginationArgs): Promise<BookEntity[]> {
    return this.prisma.book.findMany({ skip: args.skip, take: args.take });
  }

  async update(id: string, data: UpdateBookDto): Promise<BookEntity> {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<BookEntity> {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists!');
    }

    return this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
