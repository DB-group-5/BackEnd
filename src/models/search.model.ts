import pool from '$/config/db'

export default class Search {
  static async index() {
    const [rows, fields] = await pool
      .promise()
      .query('SELECT * FROM catogerty_fabrics ')
    return rows
  }
}
