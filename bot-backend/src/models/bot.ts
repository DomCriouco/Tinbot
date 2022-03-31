import {Schema, model} from "mongoose";

const botSchema = new Schema({
    picUrl: {
        64: String,
        512: String
    },
    name: String,
    meta: {
        gender: String,
        age: String,
        ethnicity: [String],
        eye_color: [String],
        hair_color: [String],
        hair_length: [String],
        emotion: [String]
    }
});

const botModel = model('Bot', botSchema);

export default botModel;