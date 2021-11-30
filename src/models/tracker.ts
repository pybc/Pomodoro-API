import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Tracker {

    @Prop()
    ownerTaskId: String;

    @Prop()
    taskId: String;

    @Prop()
    description: String;

    @Prop()
    est: Number;

    @Prop()
    startTime: Number;
    
    @Prop()
    pauseTime:Number;

    @Prop()
    resumeTime:Number;

    @Prop()
    endTime: Number;

    @Prop()
    status: String;

    @Prop()
    remainingTime: Number;
    
    @Prop()
    mode: string;

    @Prop()
    interruptCount: Number;

}

export type TrackerDocument = Tracker & Document; 

export const TrackerSchema = SchemaFactory.createForClass(Tracker);