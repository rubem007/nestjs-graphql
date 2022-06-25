import { InputType, OmitType } from '@nestjs/graphql';
import { AuthorEntity } from '../author.entity';

@InputType()
export class CreateAuthorDTO extends OmitType(
  AuthorEntity,
  ['id', 'skip', 'take'],
  InputType,
) {}
