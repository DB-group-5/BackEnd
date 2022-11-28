import { Request, Response } from 'express'
import createSuppliersModel from '$/models/create-suppliers.model'
import { QueryError, RowDataPacket } from 'mysql2'
import { ResponseFormSupplier } from '$/types/suppliers'

class CreateSuppliersController {
  // [POST] /
  async index(req: Request, res: Response) {
    try {
      const {
        name,
        address,
        tax_code,
        bank_account,
        partner_code,
        phone_1,
        phone_2
      }: ResponseFormSupplier = req.body
      // Middleware to validate value
      const data = await createSuppliersModel.index({
        name,
        address,
        tax_code,
        bank_account,
        partner_code,
        phone_1,
        phone_2
      })
      res.status(200).json({
        status_code: 200,
        message: 'Create supplier successfully'
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ status_code: 400, message: err.message })
      }
    }
  }
}
export default new CreateSuppliersController()
