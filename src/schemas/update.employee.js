import mongoose from "mongoose";

const updateEmployeeSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    war_name: { type: String },
    role: { type: String },
    identification: { type: Number },
    admission_date: { type: Date },
    to_print: { type: Boolean, default: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies'
    },
  },
  {
    versionKey: false
  }
)

const UpdateEmployee = mongoose.model('employees', updateEmployeeSchema)

export default UpdateEmployee