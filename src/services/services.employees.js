import Employee from "../models/employee.js";
import { employeeSchema, updateEmployeeSchema } from "../schemas/schemas.employee.js";

const EmployeesService = {
  async readAll(page, limit, filter) {
    /** Read all employees
     * @param {page} number Page number
     * @param {limit} number Limit of employees per page
     * @param {filter} string Filter to name, warname or ID
     */
    try {
      const options = {
        page: page,
        limit: limit,
        populate: 'company',
        customLabels: {
          docs: 'employees'
        }
      }

      const regex = new RegExp(filter, 'i')
      let find_query = !filter ? {} : {
        $or: [
          { name: { $regex: regex } },
          { war_name: { $regex: regex } },
          {
            "$expr": {
              "$regexMatch": {
                "input": { "$toString": "$id" },
                "regex": regex
              }
            }
          }]
      }

      return Employee.paginate(find_query, options)
    } catch (error) {
      throw error
    }
  },

  async read(id) {
    /** Read employee
     * @param {number} id Id of employee
    */
    try {
      return Employee.findById(id).populate('company')
    } catch (error) {
      throw error
    }
  },

  async create(data) {
    /** Create a employee
     * @param {object} data Data of employee
     */
    const employee = new Employee(data)
    try {
      await employeeSchema.validateAsync(data, { abortEarly: false })
      await employee.save()
      return employee.populate('company')
    } catch (error) {
      throw error
    }
  },

  async update(id, data) {
    /** Update employee 
     * @param {number} id Id of employee
     * @param {object} data Data of employee
    */
    try {
      await updateEmployeeSchema.validateAsync(data, { abortEarly: false })
      return Employee.findByIdAndUpdate(
        id,
        data,
        {
          returnDocument: 'after'
        }
      ).populate('company')
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    /** Delete employee
     * @param {number} id Id of employee
     */
    try {
      const employee = await Employee.findByIdAndDelete(id).populate('company')
      if (!employee) {
        throw Error('Id not found')
      }
      return employee
    } catch (error) {
      throw error
    }
  }
}

export default EmployeesService