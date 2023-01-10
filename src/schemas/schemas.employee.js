import Joi from "joi"

const employeeSchema = Joi.object({
  id: Joi.number().
    required(),

  name: Joi.string().
    required(),

  war_name: Joi.string().
    required(),

  role: Joi.string().
    required(),

  identification: Joi.number().
    required(),

  admission_date: Joi.date().
    required(),

  to_print: Joi.boolean().
    default(true),

  company: Joi.string().
    required()
})

const updateEmployeeSchema = Joi.object({
  id: Joi.number().
    optional(),

  name: Joi.string().
    optional(),

  war_name: Joi.string().
    optional(),

  role: Joi.string().
    optional(),

  identification: Joi.number().
    optional(),

  admission_date: Joi.date().
    optional(),

  to_print: Joi.boolean().
    optional(),

  company: Joi.string().
    optional()
})

export { employeeSchema, updateEmployeeSchema }
