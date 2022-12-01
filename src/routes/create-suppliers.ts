import express, { Router, Request, Response } from 'express'
import createSuppliersController from '$/controllers/create-suppliers.controller'
import { createSupplierValidation, validate } from '$/validates/validator'

const router: Router = express.Router()

router.post(
  '/',
  createSupplierValidation(),
  validate,
  createSuppliersController.index
)
export default router
