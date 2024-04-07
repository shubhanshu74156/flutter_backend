import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  banner_link: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  short_description: string;

  @IsOptional()
  @IsString()
  long_description: string;

  @IsOptional()
  @IsString()
  date: string;

  @IsArray()
  @IsOptional()
  links: string[];

  @IsOptional()
  @IsArray()
  pdfs: string[];
}
