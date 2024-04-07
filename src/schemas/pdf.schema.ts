import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Event } from './Event.schema';

@Schema()
export class Pdf {
  @Prop()
  name: string;

  @Prop()
  link: string;

  @Prop()
  size: string;
}

export const PdfSchema = SchemaFactory.createForClass(Pdf);
