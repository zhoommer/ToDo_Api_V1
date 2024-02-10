import { IsString } from "class-validator";

export class LabelsDto {
  @IsString()
  value: string;

  @IsString()
  label: string;

  @IsString()
  color: string;
}
