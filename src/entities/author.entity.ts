import { Field, ObjectType } from '@nestjs/graphql';
import { BookEntity } from './book.entity';

@ObjectType()
export class AuthorEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field({ nullable: true })
  phone?: string;

  /* @Field(() => [BookEntity], { nullable: true })
  books?: BookEntity[]; */
}
