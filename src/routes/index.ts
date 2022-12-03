import userRouter from './user'
import authRouter from './auth.router'
import logRouter from './Log.router'
import registerRouter from './register.route'
import { Express, Request, Response } from 'express'

function route(app: Express) {
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/login', authRouter)
  app.use('/api/v1/report', logRouter)
  app.use('/api/v1/register', registerRouter)
  app.use('/', (req: Request, res: Response) => {
    res.send('Server is running. Wish you a good day!')
  })
}

export default route
