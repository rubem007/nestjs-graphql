import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AuthorEntity } from 'src/entities/author.entity';
import { CreateAuthorDTO } from 'src/entities/dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAuthorDTO): Promise<AuthorEntity> {
    /* const bookExist = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExist) {
      throw new Error('Book already exists');
    } */
    const author = await this.prisma.author.create({
      data,
    });

    if (!author) {
      throw new Error('Error');
    }

    return author;
  }

  async findAll(): Promise<AuthorEntity[]> {
    return this.prisma.author.findMany();
  }
}
