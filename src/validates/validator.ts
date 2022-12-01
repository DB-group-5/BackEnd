import { query,validationResult } from "express-validator"
import { NextFunction, Request, Response } from 'express'
export const logValidation = () => {
    return [
        query('id').not().isEmpty().withMessage('Input is required').escape()
    ]

}
export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      if (req.body.partner_id) {
        req.body.partner_id = parseInt(req.body.partner_id)
      }
      return next()
    }
    res.status(400).json({
      status_code: 400,
      message: errors.array()[0].msg
    })
  }