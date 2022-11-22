import userRouter from './user'
import { Express, Request, Response } from 'express'

function route(app: Express) {
  app.use('/api/v1/user', userRouter)
  app.use('/', (req: Request, res: Response) => {
    res.send('Server is running. Wish you a good day!')
  })
}

export default route
