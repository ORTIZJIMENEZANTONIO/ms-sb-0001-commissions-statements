import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @ApiProperty({ example: 0 })
  inicio: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @ApiProperty({ example: 3 })
  pageSize: number;
}
