import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface UserDocument extends Document {
  user_id: number;
  username: string;
  password: string;
  role: string;
}

const userSchema = new Schema({
  user_id: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

const User: Model<UserDocument> = model<UserDocument>('User', userSchema);

export default User;
