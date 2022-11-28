import { Request, Response } from 'express'
import searchModel from '$/models/search.model'
import { SearchResults, SearchResponse } from '$/types/search'
import { QueryError, RowDataPacket } from 'mysql2'
import { combinePhones } from '$/utils/combinePhones'

class SearchController {
  // [GET] ?name={category-name}
  async index(req: Request, res: Response) {
    try {
      const name_category = req.query.name as string
      const result: RowDataPacket[] | undefined = await searchModel.index(
        name_category
      )
      if (result == undefined || result.length == 0) {
        res.status(404).json({
          status_code: 404,
          message: 'Not found'
        })
      }
      const data: SearchResponse[] = combinePhones(result as SearchResults[])
      res.status(200).json({
        status_code: 200,
        data,
        message: 'Success'
      })
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
export default new SearchController()
