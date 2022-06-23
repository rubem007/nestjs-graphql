import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AuthorEntity } from 'src/entities/author.entity';
import { CreateAuthorDTO } from 'src/entities/dto/create-author.dto';
import { UpdateAuthorDto } from 'src/entities/dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAuthorDTO): Promise<AuthorEntity> {
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

  async update(id: string, data: UpdateAuthorDto): Promise<AuthorEntity> {
    const authorExists = await this.prisma.author.findUnique({
      where: {
        id,
      },
    });

    if (!authorExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.author.update({
      data,
      where: {
        id,
      },
    });
  }
}
