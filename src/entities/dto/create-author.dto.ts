import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAuthorDTO {
  @Field(() => String, { nullable: true })
  id: string;
  
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field({ nullable: true })
  phone?: string;

  /* @Field(() => [BookEntity])
  books: ; */
}
