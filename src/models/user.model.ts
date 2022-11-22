import pool from '$/config/db'

export default class User {
  static async index() {
    const [rows, fields] = await pool.promise().query('SELECT * FROM customers')
    return rows
  }
}
