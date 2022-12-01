import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'
export default class DetailsCatagoriesModel {
  static async index() {
    const sql = `SELECT s.ID as id,s.Name as name, s.Address as address ,s.Taxcode as tax_code,s.BankAccount as bank_account FROM supplier s`
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
  static async showDetail(supplier_id: number) {
    const sql = `SELECT s.Name as name,fs.SuppliedDate,cf.Name,cf.Color,cf.Purchase_price as purchase_price FROM supplier s JOIN fabric_source fs ON fs.SupID = s.ID JOIN category_fabric cf ON cf.Source_code= fs.Code  WHERE s.ID=${supplier_id} ORDER BY fs.SuppliedDate;`
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
}
