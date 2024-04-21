import mongoose, { Model, Document } from "mongoose";
import Subject from "./subjectModel";
import Faculty from "./facultyModel";

const { Schema, model } = mongoose;

interface ScheduleDocument extends Document {
  schedule_id: number;
  day: string;
  start_time: Date;
  end_time: Date;
  location: number;
  subject: mongoose.Types.ObjectId;
  faculty: mongoose.Types.ObjectId;
}

const scheduleSchema = new Schema({
  schedule_id: { type: Number, required: true },
  day: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: { type: Number, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true  },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true  }
});

const Schedule: Model<ScheduleDocument> = model<ScheduleDocument>('Schedule', scheduleSchema);

export default Schedule;
