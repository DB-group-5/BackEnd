import express, { Router, Request, Response } from 'express'
import userController from '../controllers/user.controller'

const router: Router = express.Router()

router.get('/:slug', userController.show)
router.get('/', userController.index)

export default router
