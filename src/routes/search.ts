import express, { Router, Request, Response } from 'express'
import searchController from '$/controllers/search.controller'

const router: Router = express.Router()

router.get('/', searchController.index)
export default router
