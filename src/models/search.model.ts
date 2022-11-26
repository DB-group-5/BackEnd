import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'

export default class Search {
  static async index(name: string) {
    let sql = `SELECT c.code as id,c.name,c.color,c.date_supply,c.purchase_price ,s.name as supplier,sp.phone_number 
      FROM catogerty_fabrics c INNER JOIN suppliers s ON c.supplier_code=s.code 
      INNER JOIN supply_phones sp ON sp.supplier_code = s.code WHERE c.name  LIKE "${name}%"; `
    try {
      const [rows, fields] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
}
