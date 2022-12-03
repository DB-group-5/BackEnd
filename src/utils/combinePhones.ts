import { SearchResults, SearchResponse } from '$/types/search'

export const combinePhones = (result: SearchResults[]): SearchResponse[] => {
  const data: SearchResponse[] = []
  const map = new Map()
  for (const item of result) {
    if (!map.has(item.supplied_date)) {
      map.set(item.supplied_date, true)

      data.push({
        id: item.id,
        supplier_name: item.supplier_name,
        phone_number: [item.phone_number],
        supplied_date: item.supplied_date,
        fabric_name: item.fabric_name,
        color: item.color,
        purchase_price: item.purchase_price
      })
    } else {
      for (const i of data) {
        if (i.supplied_date == item.supplied_date) {
          i.phone_number.push(item.phone_number)
          break
        }
      }
    }
  }
  return data
}
