import mongoose from "mongoose";
import Company from "../models/company.js";
import Employee from "../models/employee.js";

const CompaniesService = {
  async readAll(page, limit) {
    /** Read all companies
     * @param {page} id Page number
     * @param {limit} id Limit of companies per page
     */
    try {
      const options = {
        page: page,
        limit: limit,
        customLabels: {
          docs: 'companies'
        }
      };
      return Company.paginate({}, options)
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

  async findEmployees(id, page, limit) {
    /** Find all employees by company
     * @param {number} id Id of Company
     * @param {page} id Page number
     * @param {limit} id Limit of employees per page
    */
    const options = {
      page: page,
      limit: limit,
      populate: 'company',
      customLabels: {
        docs: 'employees'
      }
    }
    try {
      return Employee.paginate(
        { 'company': mongoose.Types.ObjectId(id) },
        options
      )
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