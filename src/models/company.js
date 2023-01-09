import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
  },
  {
    versionKey: false
  }
)

companySchema.plugin(mongoosePaginate)

const Company = mongoose.model('companies', companySchema)

export default Company