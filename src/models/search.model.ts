import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'

export default class Search {
  static async index(name: string): Promise<RowDataPacket[] | undefined> {
    let sql = `SELECT s.ID as id,s.Name as supplier_name,sp.PhoneNumber as phone_number,fs.SuppliedDate as supplied_date,cf.Name as fabric_name,cf.Color as color,cf.Purchase_price as purchase_price FROM category_fabric cf INNER JOIN fabric_source fs ON cf.Source_code = fs.Code 
    INNER JOIN supplier s ON fs.SupID = s.ID 
    INNER JOIN supplierphone sp ON s.id= sp.SupID 
    WHERE cf.Name LIKE '${name}%';`
    try {
      const [rows, fields] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }
}
