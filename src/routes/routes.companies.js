import express from "express"
import CompaniesController from "../controllers/controllers.companies.js"

const router = express.Router()

router.get('/', CompaniesController.getCompanies)
router.get('/:id', CompaniesController.getCompanyById)
router.get('/:id/employees', CompaniesController.getEmployeesByCompanyId)
router.post('/', CompaniesController.createCompany)
router.put('/:id', CompaniesController.updateCompany)
router.delete('/:id', CompaniesController.deleteCompany)

export default router