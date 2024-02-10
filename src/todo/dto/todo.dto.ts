import { Transform } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";

export class ToDoDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  schedule?: Date;
}
