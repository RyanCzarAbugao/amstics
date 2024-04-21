import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface FacultyDocument extends Document {
  faculty_id: number;
  name: string;
}

const facultySchema = new Schema({
  faculty_id: { type: Number, required: true },
  name: { type: String, required: true }
});

const Faculty: Model<FacultyDocument> = model<FacultyDocument>('Faculty', facultySchema);

export default Faculty;
