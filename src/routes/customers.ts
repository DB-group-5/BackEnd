import express, { Router, Request, Response } from 'express'
import customersController from '$/controllers/customers.controller'

const router: Router = express.Router()
router.get('/', customersController.index)
export default router
