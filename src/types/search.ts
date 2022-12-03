export interface SearchResults {
  id: number
  supplier_name: string
  phone_number: string
  supplied_date: string
  fabric_name: string
  color: string
  purchase_price: number
}
export interface SearchResponse {
  id: number
  supplier_name: string
  phone_number: string[]
  supplied_date: string
  fabric_name: string
  color: string
  purchase_price: number
}
