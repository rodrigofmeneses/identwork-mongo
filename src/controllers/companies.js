import CompaniesService from "../services/companies.js"

const CompaniesController = {
  /** Companies Controllers
   * 
   * @param {Express.Request} req 
   * @param {Express.Response} res 
   * @returns 
   */
  async getCompanies(req, res) {
    const { page, limit, name } = req.query
    try {
      const result = await CompaniesService.readAll(page, limit, name)
      return res.json(result)
    } catch (error) {
      return error
    }
  },

  async getCompanyById(req, res) {
    const id = req.params.id
    try {
      const result = await CompaniesService.read(id)
      res.json(result)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },

  async getEmployeesByCompanyId(req, res) {
    const id = req.params.id
    const { page = 1, limit = 5 } = req.query
    try {
      const result = await CompaniesService.findEmployees(id, page, limit)
      res.json(result)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },

  async createCompany(req, res) {
    const body = req.body
    try {
      const result = await CompaniesService.create(body)
      res.status(201).json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async updateCompany(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const result = await CompaniesService.update(id, body)
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async deleteCompany(req, res) {
    const id = req.params.id
    try {
      const result = await CompaniesService.delete(id)
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default CompaniesController