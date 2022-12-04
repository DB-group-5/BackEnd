import { Request, Response } from 'express'
import CustomerModel from '$/models/customers.model'
import { formatDate } from '$/utils/formatDate'

class CustomersController {
  // [get] /
  async index(req: Request, res: Response) {
    try {
      const data = await CustomerModel.index()
      if (data?.length === 0 || data === undefined) {
        res.status(404).json({ status_code: 404, message: 'Not found' })
      } else {
        for (let i = 0; i < data.length; i++) {
          data[i].is_bad_depth = data[i].is_bad_depth === 0 ? false : true
          data[i].start_date_depth = formatDate(data[i].start_date_depth)
        }
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
}
export default new CustomersController()
