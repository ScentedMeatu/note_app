import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
    {
        title: {
            type: String
        },
        Desc: {
            type: String
        },
        Color: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export default model('Note', noteSchema);
