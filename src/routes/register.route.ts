import registerController from '$/controllers/register.controller'
import express, { Router } from 'express'
import { validateRegister } from '$/middlewares/user'

const router: Router = express.Router()

router.post('/', validateRegister, registerController.index)
export default router
