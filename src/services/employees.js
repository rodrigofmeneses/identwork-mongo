import Employee from "../models/employee.js"

const EmployeesService = {
  async readAll() {
    /** Read all companies
     * 
     */
    try {
      return Employee.find().populate('company')
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
      const validationError = await employee.validate()
      if (!validationError) {
        return employee.save().populate('company')
      }
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
        { returnDocument: 'after', runValidators: true }
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