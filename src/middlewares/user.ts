import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // username min length 3

  if (req.body.username < 3) {
    res.status(404).json({
      status_code: 404,
      message: 'Please enter a username with min. 3 chars'
    })
  }
  // password min 6 chars
  if (req.body.password.length < 8) {
    res.status(404).json({
      message: 'Please enter a password with min. 8 chars'
    })
  }

  // password (repeat) does not match
  // if (
  //   !req.body.password_repeat ||
  //   req.body.password != req.body.password_repeat
  // ) {
  //   return res.status(400).send({
  //     msg: 'Both passwords must match'
  //   });
  // }

  next()
}
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.body.token
    const decoded = jwt.verify(token, process.env.SECRET_KEY || '123')
    req.body.userName = decoded
    next()
  } catch (err) {
    return res.status(401).send({
      message: 'Your session is not valid!'
    })
  }
}
