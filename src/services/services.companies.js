import mongoose from "mongoose";
import Company from "../models/company.js";
import Employee from "../models/employee.js";
import { companySchema, updateCompanySchema } from "../schemas/schemas.company.js";

const CompaniesService = {
  async readAll(page, limit, filter) {
    /** Read all companies
     * @param {page} number Page number
     * @param {limit} number Limit of companies per page
     * @param {filter} string Filter number
     */
    try {
      const options = {
        page: page,
        limit: limit,
        customLabels: {
          docs: 'companies'
        }
      }

      const regex = new RegExp(filter, 'i')
      let find_query = !filter ? {} : { name: { $regex: regex } }

      return Company.paginate(find_query, options)
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
      await companySchema.validateAsync(data, { abortEarly: false })
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
      await updateCompanySchema.validateAsync(data, { abortEarly: false })
      return Company.findByIdAndUpdate(id, data, { returnDocument: 'after' })
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