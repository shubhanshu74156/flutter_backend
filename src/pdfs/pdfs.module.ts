import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pdf, PdfSchema } from 'src/schemas/pdf.schema';
import { PdfsController } from './pdfs.controller';
import { PdfsService } from './pdfs.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pdf.name,
        schema: PdfSchema,
      },
    ]),
  ],
  controllers: [PdfsController],
  providers: [PdfsService],
})
export class PdfsModule {}
