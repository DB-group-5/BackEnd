import { Request, Response } from 'express'
import User from '$/models/user.model'
class UserControler {
  // [GET] /
  async index(req: Request, res: Response) {
    console.log(await User.index())
    res.send(await User.index())
  }
  // [GET] /:slug
  show(req: Request, res: Response) {
    res.send('User detail')
  }
}

export default new UserControler()
