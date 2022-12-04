import userRouter from './user'
import searchRouter from './search'
import createSuppliersRouter from './create-suppliers'
import detailsCatagoriesRouter from './details-catagories'
import authRouter from './auth.router'
import logRouter from './Log.router'
import registerRouter from './register.route'
import employeesRouter from './employees'
import customersRouter from './customers'
import { Express, Request, Response } from 'express'
import { verifyToken } from '../middlewares/verifyToken'

function route(app: Express) {
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/search', verifyToken, searchRouter)
  app.use('/api/v1/create-suppliers', verifyToken, createSuppliersRouter)
  app.use('/api/v1/supplier/', verifyToken, detailsCatagoriesRouter)
  app.use('/api/v1/login', authRouter)
  app.use('/api/v1/report', logRouter)
  app.use('/api/v1/register', registerRouter)
  app.use('/api/v1/employees', verifyToken, employeesRouter)
  app.use('/api/v1/customers', verifyToken, customersRouter)
  app.use('/', (req: Request, res: Response) => {
    res.send('Server is running. Wish you a good day!')
  })
}

export default route
