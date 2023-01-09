import Employee from "../models/employee.js";

const EmployeesService = {
  async readAll(page, limit, filter) {
    /** Read all employees
     * @param {page} id Page number
     * @param {limit} id Limit of employees per page
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
      return Employee.paginate({
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
      }, options)
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
      return Employee.findByIdAndUpdate(
        id,
        data,
        {
          returnDocument: 'after',
          runValidators: true
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