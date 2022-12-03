import { Router } from 'express'
import getLogController from '$/controllers/getLog.controller'
import { logValidation, validate } from '$/validates/validator'

const router = Router()

router.get('/', logValidation(), validate, getLogController.index)

export default router
