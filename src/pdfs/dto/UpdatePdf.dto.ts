import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePdfDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsString()
  @IsOptional()
  size: string;
}
