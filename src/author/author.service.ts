import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AuthorEntity } from 'src/entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AuthorEntity[]> {
    //return this.prisma.author.findMany();
    return this.prisma.author.findMany();
  }
}
