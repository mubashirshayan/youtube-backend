import mongoose from "mongoose";
import { Schema } from "mongoose";
const UserModel= new Schema();
const User= mongoose.model("User",UserModel
)
export default User;