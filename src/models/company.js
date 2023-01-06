import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false
  }
)
const Company = mongoose.model('companies', companySchema)

export default Company