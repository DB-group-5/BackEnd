import { Request, Response } from 'express'
import detailsCatagoriesModel from '$/models/details-catagories.model'
import { QueryError, RowDataPacket } from 'mysql2'
import { formatDate } from '$/utils/formatDate'
import { combineSupplier } from '$/utils/combineSupplier'
import { DetailSupplier } from '$/types/suppliers'

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
      if (data?.length === 0 || data === undefined) {
        res.status(404).json({ status_code: 404, message: 'Not found' })
      } else {
        const result = combineSupplier(data as DetailSupplier[])
        res.json({
          status_code: 200,
          data: result,
          message: 'success'
        })
      }
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ status_code: 500, message: err.message })
      }
    }
  }
  //[get] /bolt/?name= & source_code=
  async showBolt(req: Request, res: Response) {
    const { name, source_code } = req.query
    try {
      const data = await detailsCatagoriesModel.showBolt(
        name as string,
        parseInt(source_code as string)
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
  //[get] /current-price/?name= & source_code=
  async showCurrentPrice(req: Request, res: Response) {
    const { name, source_code } = req.query
    try {
      const data = await detailsCatagoriesModel.showCurrentPrice(
        name as string,
        parseInt(source_code as string)
      )
      if (data?.length === 0 || data === undefined) {
        res.status(404).json({ status_code: 404, message: 'Not found' })
      } else {
        for (let i = 0; i < data.length; i++) {
          data[i].date_set = formatDate(data[i].date_set)
        }
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
