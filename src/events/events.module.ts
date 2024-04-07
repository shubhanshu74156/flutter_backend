import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from 'src/schemas/Event.schema';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Pdf, PdfSchema } from 'src/schemas/pdf.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      {
        name: Pdf.name,
        schema: PdfSchema,
      },
    ]),
  ],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
