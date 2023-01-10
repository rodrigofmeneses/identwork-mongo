import Joi from "joi"

const companySchema = Joi.object({
  name: Joi.string()
    .required()
})

const updateCompanySchema = Joi.object({
  name: Joi.string()
    .optional()
})

export { companySchema, updateCompanySchema }
