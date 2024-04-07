import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PdfsService } from './pdfs.service';
import { CreatePdfDto } from './dto/CreatePdf.dto';
import { UpdatePdfDto } from './dto/UpdatePdf.dto';
import mongoose from 'mongoose';

@Controller('pdfs')
export class PdfsController {
  constructor(private pdfsService: PdfsService) {}

  @Post()
  createPdf(@Body() createPdfDto: CreatePdfDto) {
    return this.pdfsService.createPdf(createPdfDto);
  }

  @Get()
  getPdfs() {
    return this.pdfsService.getPdfs();
  }

  @Get(':id')
  async getPdfById(@Param('id') id: string) {
    console.log(id);
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    const pdf = await this.pdfsService.getPdfById(id);
    if (!pdf)
      throw new HttpException(
        `Event not found with this id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    return pdf;
  }

  @Patch(':id')
  async updatePdf(@Param() id: string, @Body() updatePdfDto: UpdatePdfDto) {
    const updatedPdf = await this.pdfsService.updatePdf(id, updatePdfDto);
    if (!updatedPdf) {
      throw new HttpException('Pdf not found', HttpStatus.NOT_FOUND);
    }
    return updatedPdf;
  }

  @Delete(':id')
  async deletePdf(@Param() id: string) {
    const deletedPdf = await this.pdfsService.deletePdf(id);
    if (!deletedPdf) {
      throw new HttpException('Pdf not found', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
