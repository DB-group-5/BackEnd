import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'
import { ResponseFormSupplier } from '$/types/suppliers'
export default class CreateSuppliers {
  static async index(params: ResponseFormSupplier) {
    const {
      name,
      address,
      tax_code,
      bank_account,
      partner_code,
      phone_1,
      phone_2
    } = params
    const partner_code_convert = parseInt(partner_code.toString())
    console.log(typeof phone_2)
    let sql = `INSERT INTO suppliers (name,address,tax_code,bank_account,partner_code) VALUES
    ('${name}','${address}','${tax_code}','${bank_account}',${partner_code_convert})`
    try {
      const [rows, fields] = await pool.promise().query(sql)
      if (rows) {
        const sql2 = `SELECT MAX(code) FROM suppliers WHERE name = '${name}'`
        const [rows2, fields2] = await pool
          .promise()
          .query<RowDataPacket[]>(sql2)
        if (rows2) {
          const code = rows2[0]['MAX(code)']
          let sql3 = `INSERT INTO supply_phones
           (phone_number, supplier_code) VALUES ('${phone_1}',${code})`
          if (phone_2 !== '' && phone_2 !== undefined) {
            sql3 = `INSERT INTO supply_phones
            (phone_number, supplier_code) VALUES ('${phone_1}',${code}),('${phone_2}',${code})`
          }
          const [rows3, fields3] = await pool.promise().query(sql3)
          if (rows3) {
            return rows3
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
}
