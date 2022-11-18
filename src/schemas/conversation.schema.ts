import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { SchemaTimestampsConfig } from 'mongoose';
import { MessageDocument } from './message.schema';
import { UserDocument } from './user.schema';

export type ConversationDocument = Conversation & Document & SchemaTimestampsConfig;

@Schema({
    timestamps: true,
})
export class Conversation {
    _id: string;

    @Prop([
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ])
    participants: UserDocument[] | string[];

    @Prop([
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
    ])
    messages: MessageDocument[] | string[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);