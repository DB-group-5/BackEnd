import express, { Router } from 'express'
import { register, loginUser } from '$/controllers/auth.controller'

const router: Router = express.Router()

// routes/router.js

router.post('/', register)
router.post('/login', loginUser)

export default router
