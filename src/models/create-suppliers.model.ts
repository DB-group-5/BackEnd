import pool from '$/config/db'
import { RowDataPacket } from 'mysql2'
import { ResponseFormSupplier } from '$/types/suppliers'

export default class CreateSuppliers {
  static async index(params: ResponseFormSupplier) {
    const { name, address, tax_code, bank_account, partner_id, phone } = params
    const sql = `INSERT INTO supplier (Name, Address, TaxCode, BankAccount, PartnerID) VALUES ('${name}', '${address}', '${tax_code}', '${bank_account}', ${partner_id})`
    try {
      const [rows] = await pool.promise().query<RowDataPacket[]>(sql)
      if (1) {
        const sql_2 = `SELECT MAX(ID) as SupplierID FROM supplier`
        const [rows] = await pool.promise().query<RowDataPacket[]>(sql_2)
        const { SupplierID } = rows[0]
        for (let i = 0; i < phone.length; i++) {
          const sql_3 = `INSERT INTO supplierphone (SupID, PhoneNumber) VALUES (${SupplierID}, '${phone[i]}')`
          await pool.promise().query<RowDataPacket[]>(sql_3)
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err
      }
    }
  }
}
