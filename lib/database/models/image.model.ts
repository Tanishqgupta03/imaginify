//image transformation model


//import { transformationTypes } from "@/constants"
import {model, models, Schema} from "mongoose"

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object; // Use a more specific type if you know the structure of the config object
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string; // Assuming you're using MongoDB's ObjectId
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    title: {type:String, required: true},
    transformtionType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: String, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: Schema.Types.ObjectId, ref:'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});


const Image = models?.Image || model('Image', ImageSchema);


export default Image;