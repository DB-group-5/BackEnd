import express, { Router, Request, Response } from 'express'
import detailsCatagoriesController from '$/controllers/details-catagories.controller'
const router: Router = express.Router()
router.get('/current-price/', detailsCatagoriesController.showCurrentPrice)
router.get('/bolt/', detailsCatagoriesController.showBolt)
router.get('/:supplier_id', detailsCatagoriesController.showDetail)
router.get('/', detailsCatagoriesController.index)
export default router
