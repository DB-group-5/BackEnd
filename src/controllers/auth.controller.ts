import { Request, Response } from 'express'
import pool from '$/config/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { RowDataPacket } from 'mysql2'
import { registerModel, login } from '$/models/auth.model'

class loginUser {
  async index(req: Request, res: Response) {
    try {
      const username = req.body.username as string
      const password = req.body.password as string

      const result: RowDataPacket[] | undefined = await login.index(username)
      if (result == undefined || result.length == 0) {
        res.status(404).json({
          status_code: 404,
          message: 'Not found any data'
        })
      } else {
        const hashedPassword = result[0].password
        bcrypt.compare(password, hashedPassword).then((result) => {
          if (result) {
            const token = jwt.sign(
              {
                username: username,
                expiresIn: '2 days'
              },
              process.env.SECRET_KEY || '123'
            )

            res.status(200).json({
              token
            })
          } else {
            res.status(404).json({
              message: 'Password incorrect'
            })
          }
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
export default new loginUser()
