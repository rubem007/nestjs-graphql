import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [AuthorResolver, AuthorService, PrismaService],
})
export class AuthorModule {}
