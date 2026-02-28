import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FlowerModel {
    @Field(() => Int)
    id: number;
    @Field(() => String)
    name: string;
    @Field(() => String)
    color: string;
    @Field(() => Int)
    price: number;

    @Field(() => Date)
    createdAt: Date;
    @Field(() => Date)
    updatedAt: Date;
}