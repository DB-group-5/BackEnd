import { Request, Response } from 'express';
import { combine } from '$/utils/combine';
import getLogModel from '$/models/getLog.model';
import { RowDataPacket } from 'mysql2';
import { Customer,ReportCustomer } from '$/types/customer';
class getLogController{
    async index(req: Request, res: Response) {
        try {
          const idCustomer = req.query.id as any
          const result: RowDataPacket[] | undefined = await getLogModel.index(
            idCustomer
          )
          if (result == undefined || result.length == 0) {
            res.status(404).json({
              status_code: 404,
              message: 'Not found any data'
            })
          } else {
            const data: ReportCustomer[] = combine(result as Customer[])
            res.status(200).json({
              status_code: 200,
              data,
              message: 'Success'
            })
          }
        } catch (err: unknown) {
          if (err instanceof Error) {
            res.status(500).json({
              status_code: 500,
              message: err.message
            })
          }
        }
      }
}
export default new getLogController()