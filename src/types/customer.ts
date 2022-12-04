import { RowDataPacket } from 'mysql2'

export interface Customer {
  id: number
  fullName: string
  address: string
  category: string
  length: number
  boltCode: string
  date: string
  status: string
  reason: string
  totalPrice: number
  orderCode: string
}
export interface ReportCustomer {
  id: number
  fullName: string
  address: string
  category: string
  length: number
  boltCode: string
  date: string
  status: string
  reason: string
  totalPrice: number
  orderCode: string
}
