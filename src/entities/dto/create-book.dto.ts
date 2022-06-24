import { InputType, OmitType } from '@nestjs/graphql';
import { BookEntity } from '../book.entity';

@InputType()
export class CreateBookDto extends OmitType(
  BookEntity,
  ['id', 'created_at', 'updated_at'],
  InputType,
) {}
