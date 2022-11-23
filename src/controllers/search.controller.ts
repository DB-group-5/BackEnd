import { Request, Response } from 'express'
import searchModel from '$/models/search.model'

class SearchController {
  // [GET] ?name={category-name}
  async index(req: Request, res: Response) {
    console.log(await searchModel.index())
    res.send({
      message: 'Search',
      data: await searchModel.index()
    })
  }
}
export default new SearchController()
