import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'
export default class DetailsCatagoriesModel {
  static async index(name: string) {
    const sql = `SELECT code FROM suppliers WHERE name = '${name}'`

    try {
      const [rows, fields] = await pool.promise().query<RowDataPacket[]>(sql)
      console.log(rows)
      if (rows) {
        const code = rows[0].code
        const sql2 = `SELECT cf.code,cf.name,cf.color,cf.date_supply,cf.purchase_price,cp.date,cp.price as current_price FROM catogerty_fabrics cf JOIN current_prices cp ON cf.code = cp.category_code WHERE supplier_code = 2`
        const [rows2, fields2] = await pool
          .promise()
          .query<RowDataPacket[]>(sql2)
        if (rows2) {
          return rows2
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
}
