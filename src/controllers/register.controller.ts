import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { RowDataPacket } from 'mysql2'
import { registerModel, login } from '$/models/auth.model'
class registerController {
  async index(req: Request, res: Response) {
    try {
      const username = req.body.username as string
      const password = req.body.password as string
      const hashedPassword = await bcrypt.hash(password, 10)
      const result: RowDataPacket[] | undefined = await registerModel.index(
        username,
        hashedPassword
      )
      if (result == undefined || result?.length == 0) {
        res.status(404).json({
          status_code: 404,
          message: 'Not found any data'
        })
      } else {
        res.status(200).json({
          status_code: 200,
          message: 'Success'
        })
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({
          status_code: 500,
          message: err.message
        })
      }
    }
  }
}
export default new registerController()
