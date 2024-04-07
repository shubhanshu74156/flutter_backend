import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pdf } from 'src/schemas/pdf.schema';
import { CreatePdfDto } from './dto/CreatePdf.dto';
import { UpdatePdfDto } from './dto/UpdatePdf.dto';

@Injectable()
export class PdfsService {
  constructor(@InjectModel(Pdf.name) private pdfModel: Model<Pdf>) {}

  createPdf(createPdfDto: CreatePdfDto) {
    const newPdf = new this.pdfModel(createPdfDto);
    return newPdf.save();
  }

  getPdfs() {
    return this.pdfModel.find();
  }

  updatePdf(id: string, updatePdfDto: UpdatePdfDto) {
    return this.pdfModel.findByIdAndUpdate(id, updatePdfDto);
  }

  getPdfById(id: string) {
    return this.pdfModel.findById(id);
  }

  deletePdf(id: string) {
    return this.pdfModel.findByIdAndDelete(id);
  }
}
