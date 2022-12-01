import userRouter from './user'
import searchRouter from './search'
import createSuppliersRouter from './create-suppliers'
import detailsCatagoriesRouter from './details-catagories'
import { Express, Request, Response } from 'express'

function route(app: Express) {
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/search', searchRouter)
  app.use('/api/v1/create-suppliers', createSuppliersRouter)
  app.use('/api/v1/supplier/', detailsCatagoriesRouter)
  app.use('/', (req: Request, res: Response) => {
    res.send('Server is running. Wish you a good day!')
  })
}

export default route
