import { Type } from "class-transformer";
import { IsInt, IsNumber, IsString } from "class-validator";

export class GetDataQuery{
  @IsInt()
  @Type(() => Number)
  country: number;

  @IsString()
  name: string;
}