import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-scalars';

@ObjectType()
export class BookEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String)
  bar_code: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => GraphQLDateTime)
  created_at: Date;

  @Field(() => GraphQLDateTime)
  updated_at: Date;

  @Field(() => String)
  author_id: string;
}
