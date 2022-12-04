import express, { Router, Request, Response } from 'express'
import employeesController from '$/controllers/employees.controller'
const router: Router = express.Router()
router.get('/partner', employeesController.partner)
export default router
