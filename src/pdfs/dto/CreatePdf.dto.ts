import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePdfDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  size: string;
}
