import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'

export class registerModel {
  static async index(
    username: string,
    password: string
  ): Promise<RowDataPacket[] | undefined> {
    let sql = `INSERT INTO users (username,password) values  ('${username}','${password}');`
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
export class login {
  static async index(username: string): Promise<RowDataPacket[] | undefined> {
    let sql = `SELECT * FROM users WHERE username = '${username}';`
    console.log(username)
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      console.log(rows)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }
}
