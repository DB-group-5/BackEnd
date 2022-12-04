import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'

export default class Employees {
  static async partner(): Promise<RowDataPacket[] | undefined> {
    let sql = `SELECT ID as partner_id, CONCAT(FirstName , LastName) as full_name,Job_type as job_type FROM employee WHERE Job_type = 'partner';`
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
