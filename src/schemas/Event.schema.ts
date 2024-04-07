import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Event {
  @Prop()
  banner_link: string;

  @Prop()
  title: string;

  @Prop()
  sort_description: string;

  @Prop()
  long_description: string;

  @Prop()
  date: string;

  @Prop()
  links: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pdf' }] })
  pdfs?: string[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
