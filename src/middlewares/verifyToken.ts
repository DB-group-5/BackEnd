import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //ACCESS TOKEN FROM HEADER, REFRESH TOKEN FROM COOKIE
  const token = <string>req.headers.token
  // const refreshToken = req.cookies.refreshToken;
  if (token) {
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken, process.env.SECRET_KEY || '123', (err, user) => {
      if (err) {
        return res.status(403).json({
          status_code: 403,
          message: 'Token is not valid!'
        })
      }
      req.body.user = user
      next()
    })
  } else {
    res.status(401).json({
      status_code: 401,
      message: "You're not authenticated"
    })
  }
}
