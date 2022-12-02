import { Request, Response } from 'express'
import pool from '$/config/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { RowDataPacket } from 'mysql2'

export const register = async (req: Request, res: Response) => {
  const { userName, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  pool.query(
    'INSERT INTO fabric_store set ?',
    { userName: userName, password: hashedPassword },
    (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json({
          msg: 'success'
        })
      }
    }
  )
}

export const loginUser = (req: Request, res: Response) => {
  const { userName, password } = req.body

  pool.query(
    'SELECT * FROM fabric_store WHERE  = ' + pool.escape(userName),
    (err: string, data: RowDataPacket) => {
      if (err) {
        console.log(err)
      } else {
        if (data.length == 0) {
          res.json({
            msg: 'The user does not exist in the database'
          })
        } else {
          const userPassword = data[0].password
          console.log(password)
          bcrypt.compare(password, userPassword).then((result) => {
            if (result) {
              const token = jwt.sign(
                {
                  userName: userName,
                  expiresIn: '2 days'
                },
                process.env.SECRET_KEY || '123'
              )

              res.json({
                token
              })
            } else {
              res.json({
                msg: 'Password incorrect'
              })
            }
          })
        }
      }
    }
  )
}
