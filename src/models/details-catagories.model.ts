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
    const sql = `SELECT s.Name as name,fs.Code as source_code ,fs.SuppliedDate,cf.Name,cf.Color,cf.Purchase_price as purchase_price FROM supplier s JOIN fabric_source fs ON fs.SupID = s.ID JOIN category_fabric cf ON cf.Source_code= fs.Code  WHERE s.ID=${supplier_id} ORDER BY fs.SuppliedDate;`
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
  static async showBolt(name: string, source_code: number) {
    const sql = `SELECT b.code, b.Source_code as source_code,b.categoryName  ,b.Length as length_bolt FROM category_fabric cf JOIN bolt b ON b.CategoryName = cf.Name AND b.Source_code=cf.Source_code WHERE cf.Name = '${name}' AND cf.Source_code = ${source_code}`
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      return rows
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
  static async showCurrentPrice(name: string, source_code: number) {
    const sql = `SELECT cp.price as current_price ,cp.Dateset as date_set FROM category_fabric cf JOIN currentprice cp ON cp.categoryName = cf.Name AND cp.Source_code=cf.Source_code WHERE cf.Name = '${name}' AND cf.Source_code = ${source_code} `
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
