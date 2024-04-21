import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface AttendanceDocument extends Document {
  attendance_id: number;
  attendance_status: string;
  attendance_date: Date;
  schedule_id: number;
  student: mongoose.Types.ObjectId;
}

const attendanceSchema = new Schema({
  attendance_id: { type: Number, required: true },
  attendance_status: { type: String, required: true },
  attendance_date: { type: Date, required: true },
  schedule_id: { type: Number, required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
});

const Attendance: Model<AttendanceDocument> = model<AttendanceDocument>('Attendance', attendanceSchema);

export default Attendance;
