import mongoose from "mongoose";
import Company from "../models/company.js";
import Employee from "../models/employee.js";

const CompaniesService = {
  async readAll() {
    /** Read all companies
     * 
     */
    try {
      return Company.find()
    } catch (error) {
      throw error
    }
  },

  async read(id) {
    /** Read company
     * @param {number} id Id of Company
    */
    try {
      return Company.findById(id)
    } catch (error) {
      throw error
    }
  },

  async findEmployees(id) {
    /** Find all employees by company
     * @param {number} id Id of Company
    */
    try {
      return Employee.find(
        { 'company': mongoose.Types.ObjectId(id) }
      ).populate('company')
    } catch (error) {
      throw error
    }
  },

  async create(data) {
    /** Create a company
     * @param {object} data Data of Company
     */
    const company = new Company(data)
    try {
      return company.save()
    } catch (error) {
      throw error
    }
  },

  async update(id, data) {
    /** Update company 
     * @param {number} id Id of Company
     * @param {object} data Data of Company
    */
    try {
      return Company.findByIdAndUpdate(id, data, { returnDocument: 'after', runValidators: true })
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    /** Delete company
     * @param {number} id Id of Company
     */
    try {
      const company = await Company.findByIdAndDelete(id)
      if (!company) {
        throw Error('Id not found')
      }
      return company
    } catch (error) {
      throw error
    }
  }
}

export default CompaniesService