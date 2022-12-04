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
        partner_id,
        phone
      }: ResponseFormSupplier = req.body
      console.log(req.body.name)
      await createSuppliersModel.index({
        name,
        address,
        tax_code,
        bank_account,
        partner_id,
        phone
      })
      res.status(201).json({
        status_code: 201,
        message: 'Create supplier successfully'
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ status_code: 500, message: err.message })
      }
    }
  }
}
export default new CreateSuppliersController()
