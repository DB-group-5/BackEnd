import { RowDataPacket } from 'mysql2'

export interface Customer {
  id: number
  FirstName: string
  LastName: string
  address: string
  category: string
  length: number
  boltCode: string
  date: Date
  status: string
  reason: string
  totalPrice: number
  orderCode: string
}
export interface ReportCustomer {
  id: number
  FirstName: string
  LastName: string
  address: string
  category: string
  length: number
  boltCode: string
  date: Date
  status: string
  reason: string
  totalPrice: number
  orderCode: string
}
