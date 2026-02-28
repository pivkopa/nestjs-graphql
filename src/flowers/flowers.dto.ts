import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FlowersCreateDto {
    @IsString()
    @ApiProperty({
        example: 'Rose',
        required: true,
    })
    name: string

    @IsString()
    @ApiProperty({
        example: 'Red',
        required: true,
    })
    color: string

    @IsNumber()
    @ApiProperty({
        example: 10,
        required: true,
    })
    price: number
}

export type TFlowersUpdatedDto = Partial<FlowersCreateDto>
