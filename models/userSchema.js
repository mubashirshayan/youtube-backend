import mongoose from "mongoose";
import { Schema } from "mongoose";
const UserModel= new Schema(
{
    username: {
        type: String,
        required: true,
        unique: true
      },
      fullname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      avatar: String,
      coverImage: String,
      password: {
        type: String,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
}
);
const User= mongoose.model("User",UserModel
)
export default User;
//id
//user name
//email
//full name
//avatar
//cover image
//password
//refresh token
//time stamp