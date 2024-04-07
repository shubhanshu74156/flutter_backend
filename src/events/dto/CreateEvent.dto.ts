import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsOptional()
  banner_link: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  short_description: string;

  @IsNotEmpty()
  @IsString()
  long_description: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsArray()
  @IsOptional()
  links: string[];

  @IsArray()
  pdfs?: string[];
}
