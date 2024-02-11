import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class LabelsDto {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsOptional()
  toDoId?: number;
}
