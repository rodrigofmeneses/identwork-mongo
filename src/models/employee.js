import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    war_name: { type: String, required: true },
    role: { type: String, required: true },
    identification: { type: Number, required: true },
    admission_date: { type: Date, required: true },
    to_print: { type: Boolean, default: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies',
      required: true
    },
  },
  {
    versionKey: false
  }
)

const Employee = mongoose.model('employees', employeeSchema)

export default Employee