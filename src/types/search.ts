export interface SearchResults {
  id: number
  name: string
  color: string
  date_supply: string
  purchase_price: number
  supplier: string
  phone_number: string
}
export interface SearchResponse {
  id: number
  name: string
  color: string
  date_supply: string
  purchase_price: number
  supplier: string
  phone_number: string[]
}
