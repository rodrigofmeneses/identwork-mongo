import Company from "../models/company.js"

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

  async create(data) {
    /** Create a company
     * @param {object} data Data of Company
     */
    const company = new Company(data)
    try {
      const validationError = await company.validate()
      if (!validationError) {
        return company.save()
      }
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