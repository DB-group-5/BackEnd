import { Request, Response } from 'express'
import detailsCatagoriesModel from '$/models/details-catagories.model'
import { QueryError, RowDataPacket } from 'mysql2'

class DetailsCatagoriesController {
  // [get] /?name=
  async index(req: Request, res: Response) {
    try {
      console.log(req.query.name)
      const data = await detailsCatagoriesModel.index(req.query.name as string)
      res.status(200).json({
        status_code: 200,
        data,
        message: 'success'
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ status_code: 400, message: err.message })
      }
    }
  }
}
export default new DetailsCatagoriesController()
