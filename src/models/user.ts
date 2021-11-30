import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User {
    @Prop()
    userId: String;

    @Prop()
    displayName: String;

    @Prop()
    pictureUrl: String;

}

export type UserDocument = User & Document; 

export const UserSchema = SchemaFactory.createForClass(User);