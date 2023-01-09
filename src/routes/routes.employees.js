import express from "express"
import EmployeesController from "../controllers/controllers.employees.js"

const router = express.Router()

router.get('/', EmployeesController.getEmployees)
router.get('/:id', EmployeesController.getEmployeeById)
router.post('/', EmployeesController.createEmployee)
router.put('/:id', EmployeesController.updateEmployee)
router.delete('/:id', EmployeesController.deleteEmployee)

export default router