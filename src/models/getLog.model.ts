import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'

export default class getLog {
  static async index(id: number): Promise<RowDataPacket[] | undefined> {
    let sql =
      `SELECT o.cusID as id, o.date as date, o.status as status, o.reason as reason, o.totalPrice as totalPrice, o.code as orderCode, 
    b.categoryName as category, b.Length as length ,b.code as boltCode,
    CONCAT(c.FirstName,c.LastName) as fullName, c.address as address
    FROM customer c INNER JOIN ` +
      '`order`' +
      ` o ON c.ID = o.cusID 
    INNER JOIN bolt b ON o.Code = b.orderCode
    WHERE c.id LIKE '${id}%';`
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }
}
