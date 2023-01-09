import EmployeesService from "../services/employees.js"

const EmployeesController = {
  /** Employees Controllers
   * 
   * @param {Express.Request} req 
   * @param {Express.Response} res 
   * @returns 
   */
  async getEmployees(req, res) {
    const { page, limit, filter } = req.query
    try {
      const result = await EmployeesService.readAll(page, limit, filter)
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async getEmployeeById(req, res) {
    const id = req.params.id
    try {
      const result = await EmployeesService.read(id)
      res.json(result)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },

  async createEmployee(req, res) {
    const body = req.body
    try {
      const result = await EmployeesService.create(body)
      res.status(201).json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async updateEmployee(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const result = await EmployeesService.update(id, body)
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async deleteEmployee(req, res) {
    const id = req.params.id
    try {
      const result = await EmployeesService.delete(id)
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default EmployeesController