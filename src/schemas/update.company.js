import mongoose from "mongoose";

const updateCompanySchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionKey: false
  }
)

const UpdateCompany = mongoose.model('companies', updateCompanySchema)

export default UpdateCompany