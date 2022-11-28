import express, { Router, Request, Response } from 'express'
import createSuppliersController from '$/controllers/create-suppliers.controller'
const router: Router = express.Router()

router.post('/', createSuppliersController.index)
export default router
