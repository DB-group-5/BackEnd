import { Request, Response } from 'express'
import EmployeesModel from '$/models/employees.model'

class EmployeesController {
  // [get] /
  async partner(req: Request, res: Response) {
    try {
      const data = await EmployeesModel.partner()
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
}
export default new EmployeesController()
