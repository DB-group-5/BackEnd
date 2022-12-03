import express, { Router, Request, Response } from 'express'
import searchController from '$/controllers/search.controller'
import { searchValidation, validate } from '$/validates/validator'
const router: Router = express.Router()

router.get('/', searchValidation(), validate, searchController.index)
export default router
