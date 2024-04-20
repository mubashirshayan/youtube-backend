import mongoose from "mongoose"
import { Schema } from "mongoose";
const VideoModel=new Schema({
    videoFile:{
        type: String,
        required: true,
        unique: true
    }, 
     title:{
        type: String,
        required: true,
        unique: true
    },
    discription:{
        type: String,
        required: true,
        unique: true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})