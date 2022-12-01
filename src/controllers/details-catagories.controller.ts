import { Request, Response } from 'express'
import detailsCatagoriesModel from '$/models/details-catagories.model'
import { QueryError, RowDataPacket } from 'mysql2'

class DetailsCatagoriesController {
  // [get] /
  async index(req: Request, res: Response) {
    try {
      const data = await detailsCatagoriesModel.index()
      if (data?.length === 0) {
        res.status(404).json({ status_code: 404, message: 'Not found' })
      } else {
        res.json({
          status_code: 200,
          data
        })
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ status_code: 500, message: err.message })
      }
    }
  }

  //[get] /:supplier_id
  async showDetail(req: Request, res: Response) {
    try {
      const data = await detailsCatagoriesModel.showDetail(
        parseInt(req.params.supplier_id)
      )
      if (data?.length === 0) {
        res.status(404).json({ status_code: 404, message: 'Not found' })
      } else {
        res.json({
          status_code: 200,
          data,
          message: 'success'
        })
      }
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ status_code: 500, message: err.message })
      }
    }
  }
}
export default new DetailsCatagoriesController()
