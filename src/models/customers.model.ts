import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'

export default class Customers {
  static async index(): Promise<RowDataPacket[] | undefined> {
    let sql = `SELECT ID as customer_id, CONCAT(FirstName , LastName) as full_name, address,startDate_Dept as start_date_depth,isBadDept as is_bad_depth,unpaidDept as unpaid_dept FROM customer;`
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
