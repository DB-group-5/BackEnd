export interface ResponseFormSupplier {
  name: string
  address: string
  tax_code: string
  bank_account: string
  partner_id: number
  phone: string[]
}
export interface DetailSupplier {
  name_supplier: string
  source_code: number
  supplied_date: string
  name_category: string
  color: string
  purchase_price: number
}
export interface CategoryFabric {
  source_code: number
  supplied_date: string
  name_category: string
  color: string
  purchase_price: number
}
export interface ResponseDetailSupplier {
  name_supplier: string
  category_info: Array<CategoryFabric>
}
