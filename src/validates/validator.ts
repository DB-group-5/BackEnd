import { body, check, query, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'
export const searchValidation = () => {
  return [
    query('name').not().isEmpty().withMessage('Input is required').escape()
  ]
}
export const createSupplierValidation = () => {
  return [
    body('name').not().isEmpty().withMessage('Name is required').escape(),
    body('address').not().isEmpty().withMessage('Address is required').escape(),
    body('tax_code')
      .not()
      .isEmpty()
      .withMessage('Tax code is required')
      .isLength({ max: 6 })
      .withMessage('Tax code must be <  6 characters')
      .escape(),
    body('bank_account')
      .not()
      .isEmpty()
      .withMessage('Bank account is required')
      .escape(),
    body('partner_id')
      .not()
      .isEmpty()
      .withMessage('Partner is required')
      .escape(),
    body('phone').not().isEmpty().withMessage('Phone is required')
  ]
}
export const logValidation = () => {
  return [query('id').not().isEmpty().withMessage('Input is required').escape()]
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  res.status(400).json({
    status_code: 400,
    message: errors.array()[0].msg
  })
}
