import { InputType, PartialType } from '@nestjs/graphql';
import { CreateAuthorDTO } from './create-author.dto';

@InputType()
export class UpdateAuthorDto extends PartialType(CreateAuthorDTO) {}
